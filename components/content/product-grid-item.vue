<template>
  <article class="product-grid-item">
    <figure
      class="cursor-pointer product-grid-item__figure"
      @click="handleClick"
      @mouseover="showAltImage = true"
      @mouseleave="showAltImage = false"
    >
      <img
        :src="primarySrc"
        :alt="item.title"
        class="w-full product-grid-item__primary-image"
      />
      <img
        :src="secondarySrc"
        :alt="item.title"
        class="w-full product-grid-item__secondary-image"
        :class="{
          'product-grid-item__secondary-image--visible':
            showAltImage || showDescription,
        }"
      />
    </figure>
    <div
      class="product-grid-item__content text-center py-12 overflow-hidden"
      :class="[showDescription ? 'max-h-160' : 'max-h-32']"
    >
      <h2
        class="cursor-pointer relative mb-10"
        :class="{ 'product-grid-item__title--active': showDescription }"
        @click="handleClick"
      >
        {{ item.title }}
      </h2>
      <transition name="slide-fade">
        <div v-show="showDescription">
          <p
            v-if="item.description"
            class="product-grid-item__description w-80 max-w-full mb-6 mx-auto pl-4 text-left font-serif leading-7"
          >
            {{ item.description }}
          </p>
          <ul v-if="item.listInfo">
            <li
              v-for="listItem in listInfoAsArray(item.listInfo)"
              :key="listItem"
              class="font-serif italic leading-6 mb-1"
            >
              {{ listItem }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProductItem, ProductGrid } from '@/types'

export default Vue.extend({
  name: 'ProductGridItem',

  props: {
    item: {
      type: Object as () => ProductItem,
      required: true,
    },
    imageDir: {
      type: String as () => ProductGrid['imageDir'],
      default: '',
    },
    hoverSuffix: {
      type: String as () => ProductGrid['hoverSuffix'],
      default: '',
    },
  },

  data() {
    return {
      showDescription: false,
      showAltImage: false,
    }
  },

  computed: {
    imageSrcSplit(): string[] {
      return this.item.image.split('.')
    },

    dir(): string {
      return this.imageDir ? `${this.imageDir}/` : ''
    },

    primarySrc(): object | Nullable<null> {
      try {
        return require(`@/assets/images/${this.dir}${this.item.image}`)
      } catch (e) {
        return null
      }
    },

    secondarySrc(): object | Nullable<null> {
      const imageSrc = `${this.imageSrcSplit[0]}${this.hoverSuffix}.${this.imageSrcSplit[1]}`

      try {
        return require(`@/assets/images/${this.dir}${imageSrc}`)
      } catch (e) {
        return null
      }
    },

    listInfoAsArray(): Function {
      return (str: string): string[] => {
        return str.split(/\n/g)
      }
    },
  },

  methods: {
    handleClick(): void {
      this.showDescription = !this.showDescription
      this.showAltImage = this.showDescription
    },
  },
})
</script>

<style lang="scss" scoped>
.product-grid-item {
  &__content {
    transition: max-height 0.4s ease-out;
  }

  &__title {
    &--active {
      &::before {
        width: rem(70);
        height: rem(2);
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        bottom: rem(-16);
        background-color: var(--color-primary);
        content: '';
      }
    }
  }

  &__figure {
    position: relative;
  }

  &__secondary-image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.15s ease-out;

    &--visible {
      opacity: 1;
    }
  }
}
</style>

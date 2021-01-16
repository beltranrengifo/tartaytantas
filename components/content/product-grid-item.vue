<template>
  <article class="product-grid-item">
    <figure
      class="cursor-pointer"
      @click="handleClick"
      @mouseover="showAltImage = true"
      @mouseleave="showAltImage = false"
    >
      <img :key="src" :src="src" :alt="item.title" class="w-full" />
    </figure>
    <div
      class="product-grid-item__content text-center py-12 overflow-hidden"
      :class="[showDescription ? 'max-h-160' : 'max-h-32']"
    >
      <h2
        class="cursor-pointer relative"
        :class="{ 'product-grid-item__title--active': showDescription }"
        @click="handleClick"
      >
        {{ item.title }}
      </h2>
      <transition name="slide-fade">
        <p
          v-show="showDescription"
          class="product-grid-item__description w-80 max-w-full mt-10 mb-0 mx-auto pl-4 text-left"
        >
          {{ item.description }}
        </p>
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
    src(): object | Nullable<null> {
      const imageSplit = this.item.image.split('.')
      const dir = this.imageDir ? `${this.imageDir}/` : ''

      const image =
        this.showAltImage || this.showDescription
          ? `${imageSplit[0]}${this.hoverSuffix}.${imageSplit[1]}`
          : this.item.image

      try {
        return require(`@/assets/images/${dir}${image}`)
      } catch (e) {
        return null
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
}
</style>

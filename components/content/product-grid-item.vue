<template>
  <article class="product-grid-item">
    <figure
      class="cursor-pointer product-grid-item__figure"
      @click="handleClick"
      @mouseover="showAltImage = true"
      @mouseleave="showAltImage = false"
    >
      <picture>
        <source type="image/webp" :srcset="getImageSrc({ useWebP: true })" />
        <source type="image/jpeg" :srcset="getImageSrc()" />
        <img
          :src="getImageSrc()"
          :alt="item.title"
          class="w-full product-grid-item__primary-image"
        />
      </picture>
      <picture>
        <source
          type="image/webp"
          :srcset="getImageSrc({ useSecondary: true, useWebP: true })"
        />
        <source
          type="image/jpeg"
          :srcset="getImageSrc({ useSecondary: true })"
        />
        <img
          :src="getImageSrc({ useSecondary: true })"
          :alt="item.title"
          class="w-full product-grid-item__secondary-image"
          :class="{
            'product-grid-item__secondary-image--visible':
              showAltImage || showDescription,
          }"
        />
      </picture>
    </figure>
    <div class="product-grid-item__content text-center py-12 overflow-hidden">
      <h2
        class="cursor-pointer relative"
        :class="{
          'product-grid-item__title--active': showDescription,
          'mb-10': showDescription,
          'mb-2': !showDescription,
        }"
        @click="handleClick"
      >
        {{ item.title }}
      </h2>
      <div>
        <p
          v-show="showDescription"
          class="product-grid-item__description w-80 max-w-full mb-6 mx-auto pl-4 text-left font-serif leading-7"
        >
          {{ item.description }}
          <span
            class="product-grid-item__description-helper text-xs block mt-2 leading-5 italic"
          >
            {{ item.descriptionHelper }}
          </span>
        </p>

        <ul v-if="item.listInfo" class="w-80 max-w-full mx-auto pl-4 text-left">
          <li
            v-for="(listItem, index) in listInfoAsArray(item.listInfo)"
            :key="`${listItem}-${index}`"
            class="font-serif italic leading-6 mb-1"
          >
            {{ listItem }}
          </li>
        </ul>
        <buy-button v-if="item.buyButton" :item="item" :image="getImageSrc()" />
        <interactive-tag
          v-if="item.action"
          :link="item.action.url"
          linkTarget="_blank"
          renderUiAsButton
        >
          {{ item.action.label }}
        </interactive-tag>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProductItem, ProductGrid } from '@/types'
import ProductMetaData from '@/mixins/product-meta-data'
import BuyButton from '@/components/snipcart/buy-button.vue'

interface getImageSrcParams {
  useSecondary?: boolean
  useWebP?: boolean
}

export default Vue.extend({
  name: 'ProductGridItem',

  components: {
    BuyButton,
  },

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

    getImageSrc(): Function {
      return ({ useSecondary, useWebP }: getImageSrcParams = {}):
        | object
        | Nullable<null> => {
        let imageSrc = useSecondary
          ? `${this.imageSrcSplit[0]}${this.hoverSuffix}.${this.imageSrcSplit[1]}`
          : this.item.image

        imageSrc = useWebP ? `${imageSrc.split('.')[0]}.webp` : imageSrc

        try {
          return require(`@/assets/images/${this.dir}${imageSrc}`)
        } catch (e) {
          return null
        }
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

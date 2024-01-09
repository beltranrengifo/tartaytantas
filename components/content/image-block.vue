<template>
  <container
    :fullwidth="fullwidth"
    :boxed="boxed"
    class="image-block flex justify-center items-center flex-shrink-0 flex-grow-0 w-full"
    :class="[
      `${height || 'h-auto'}`,
      `${width || 'md:w-1/4'}`,
      containerTailwind,
    ]"
  >
    <figure class="image-block__figure w-full h-full">
      <picture>
        <source type="image/webp" :srcset="srcWebP" />
        <source type="image/jpeg" :srcset="src" />
        <img
          :src="src"
          :alt="imageAlt"
          srcset=""
          class="w-full h-full object-cover"
          :class="[`${align || 'object-center'}`, extraClasses]"
        />
      </picture>
    </figure>
    <div class="image-block__title-wrapper">
      <component
        class="image-block__title md:text-big-title text-white font-medium text-center font-serif"
        :is="titleTag"
      >
        {{ title }}
      </component>
      <div class="text-center">
        <interactive-tag
          v-if="action"
          :link="action.url"
          :linkTarget="action.target"
          renderUiAsButton
          primary
          :useSpaNavigation="action.useSpaNavigation"
        >
          {{ action.label }}
        </interactive-tag>
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageBlock } from '@/types/index'
import Container from '@/components/layout/container.vue'
import InteractiveTag from '@/components/ui/interactive-tag.vue'

export default Vue.extend({
  name: 'ImageBlock',

  components: {
    Container,
    InteractiveTag,
  },

  props: {
    containerTailwind: {
      type: String as () => ImageBlock['containerTailwind'],
      default: '',
    },
    image: {
      type: String as () => ImageBlock['image'],
      required: true,
    },
    imageAlt: {
      type: String as () => ImageBlock['imageAlt'],
      default: 'Tartaytantas',
    },
    width: {
      type: String as () => ImageBlock['width'],
      default: '1/4',
    },
    fullwidth: {
      type: Boolean as () => ImageBlock['fullwidth'],
      default: true,
    },
    boxed: {
      type: Boolean as () => ImageBlock['boxed'],
      default: false,
    },
    height: {
      type: String as () => ImageBlock['height'],
      default: 'auto',
    },
    align: {
      type: String as () => ImageBlock['align'],
      default: 'center',
    },
    extraClasses: {
      type: String as () => ImageBlock['extraClasses'],
      default: '',
    },
    title: {
      type: String as () => ImageBlock['title'],
      default: '',
    },
    titleTag: {
      type: String as () => ImageBlock['titleTag'],
      default: '',
    },
    action: {
      type: Object as () => ImageBlock['action'],
      default: null,
    },
  },

  computed: {
    src(): object | Nullable<null> {
      try {
        return require(`@/assets/images/${this.image}`)
      } catch (e) {
        return null
      }
    },
    srcWebP(): object | Nullable<null> {
      try {
        const imageName = this.image.split('.')[0]
        return require(`@/assets/images/${imageName}.webp`)
      } catch (e) {
        return null
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.image-block {
  min-height: $--section-min-h;
  position: relative;

  &__figure {
    img {
      @include breakpoint(only-phone) {
        min-height: $--section-min-h;
        object-fit: cover;
      }
    }
  }

  &__title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

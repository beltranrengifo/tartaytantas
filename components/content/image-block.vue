<template>
  <container
    class="image-block flex justify-center items-center flex-shrink-0 flex-grow-0 w-full"
    :class="[getHeight, getWidth]"
  >
    <figure class="w-full h-full">
      <img
        :src="src"
        :alt="imageAlt"
        srcset=""
        class="w-full h-full object-cover"
        :class="[getAlign, extraClasses]"
      />
    </figure>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageBlock } from '@/types/index'

export default Vue.extend({
  name: 'ImageBlock',

  props: {
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
  },

  computed: {
    src(): object | Nullable<null> {
      try {
        return require(`@/assets/images/${this.image}`)
      } catch (e) {
        return null
      }
    },
    getWidth(): string {
      return this.width || 'md:w-1/4'
    },
    getHeight(): string {
      return this.height || 'h-auto'
    },
    getAlign(): string {
      return this.align || 'object-center'
    },
  },
})
</script>

<style lang="scss" scoped>
.image-block {
  min-height: $--section-min-h;
}
</style>

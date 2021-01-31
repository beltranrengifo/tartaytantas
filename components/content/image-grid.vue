<template>
  <container
    boxed
    class="image-grid w-full"
    :class="[paddingTop, paddingBottom, width, height]"
    tag="article"
  >
    <div
      class="grid justify-center h-full grid-cols-1 gap-2"
      :class="[gap, columns]"
    >
      <figure
        v-for="(image, i) in images"
        :key="image + i"
        class="overflow-hidden"
      >
        <img
          class="w-full h-full object-cover"
          :src="imageUrl(image.src)"
          :alt="image.alt"
          :class="[image.extraClasses]"
        />
      </figure>
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageGrid } from '@/types'
import ImageUrl from '@/mixins/image-url'

export default Vue.extend({
  name: 'ImageGrid',
  mixins: [ImageUrl],
  props: {
    images: {
      type: Array as () => ImageGrid['images'],
      required: true,
    },
    columns: {
      type: String as () => ImageGrid['columns'],
      default: 'grid-cols-2',
    },
    gap: {
      type: String as () => ImageGrid['gap'],
      default: 'gap-4',
    },
    paddingTop: {
      type: String as () => ImageGrid['paddingTop'],
      default: 'pt-0',
    },
    paddingBottom: {
      type: String as () => ImageGrid['paddingBottom'],
      default: 'pb-0',
    },
    width: {
      type: String as () => ImageGrid['width'],
      default: 'full',
    },
    height: {
      type: String as () => ImageGrid['height'],
      default: 'auto',
    },
  },
})
</script>

<style lang="scss" scoped>
.image-grid {
  .grid {
    @include breakpoint(only-phone) {
    }
  }
}
</style>

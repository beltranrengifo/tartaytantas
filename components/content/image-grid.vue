<template>
  <container
    boxed
    :class="[paddingTop, paddingBottom, `w-${width}`, `min-h-${height}`]"
    tag="article"
  >
    <div
      class="grid justify-center h-full"
      :class="[`gap-${gap}`, `grid-cols-${columns}`]"
    >
      <figure v-for="(image, i) in images" :key="image + i">
        <img
          class="w-full h-full object-cover"
          :src="imageUrl(image.src)"
          :alt="image.alt"
        />
      </figure>
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageGrid } from '@/types/index'
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
      type: Number as () => ImageGrid['columns'],
      default: 2,
    },
    gap: {
      type: Number as () => ImageGrid['gap'],
      default: 4,
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

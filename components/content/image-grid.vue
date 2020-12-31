<template>
  <container class="w-full" boxed :class="[paddingTop, paddingBottom]">
    <div
      class="grid justify-center"
      :class="[`gap-${gap}`, `grid-cols-${columns}`]"
    >
      <figure v-for="(image, i) in images" :key="image + i">
        <img class="w-full" :src="imageUrl(image.src)" :alt="image.alt" />
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
  },
})
</script>

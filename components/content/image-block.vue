<template>
  <container> image block </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImageBlock } from '@/types/index'

export default Vue.extend({
  name: 'TextBlock',

  props: {
    image: {
      type: String as () => ImageBlock['image'],
      required: true,
    },
    imageAlt: {
      type: String as () => ImageBlock['imageAlt'],
      default: 'Tartaytantas',
    },
  },

  computed: {},
})
</script>

<style lang="scss" scoped>
.image-block {
}
</style>

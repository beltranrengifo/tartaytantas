<template>
  <container class="flex"> text block </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { TextBlock } from '@/types/index'

export default Vue.extend({
  name: 'TextBlock',

  props: {
    content: {
      type: String as () => TextBlock['content'],
      required: true,
    },
    showLines: {
      type: Boolean as () => TextBlock['showLines'],
      default: false,
    },
    background: {
      type: String as () => TextBlock['background'],
      default: 'secondary',
    },
    color: {
      type: String as () => TextBlock['color'],
      default: 'base',
    },
  },

  computed: {},
})
</script>

<style lang="scss" scoped>
.text-block {
}
</style>

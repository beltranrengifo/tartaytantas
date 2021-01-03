<template>
  <component
    :is="tag"
    class="content-container"
    :class="{
      'content-container--boxed': boxed,
      'content-container--fullwidth': fullwidth,
      flex,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Container } from '@/types/index'

export default Vue.extend({
  name: 'AppContainer',
  props: {
    tag: {
      type: String as () => Container['tag'],
      default: 'section',
    },
    boxed: {
      type: Boolean as () => Container['boxed'],
      default: false,
    },
    fullwidth: {
      type: Boolean as () => Container['fullwidth'],
      default: false,
    },
    flex: {
      type: Boolean as () => Container['flex'],
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.content-container {
  overflow: hidden;
  &:not(.content-container--fullwidth):not(.content-container--boxed) {
    margin: 0 auto;
    max-width: rem(1920);
  }
  &--boxed {
    max-width: rem(1440);
    margin: 0 auto;
  }
}
</style>

<template>
  <component
    :is="tag"
    class="app-container"
    :class="{
      'app-container--boxed': boxed,
      'app-container--fullwidth': fullwidth,
    }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppContainer',

  props: {
    tag: {
      type: String,
      default: 'section',
    },
    boxed: {
      type: Boolean,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.app-container {
  margin: 0 auto;
  &:not(.app-container--fullwidth) {
    max-width: rem(1920);
  }
  &--boxed {
    max-width: rem(1024);
  }
}
</style>

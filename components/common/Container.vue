<template>
  <component :is="tag" class="container" :class="{ 'container--boxed': boxed }">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Container',

  props: {
    tag: {
      type: String,
      default: 'section',
    },
    boxed: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  max-width: rem(1920);
  margin: 0 auto;
  &--boxed {
    max-width: rem(1024);
  }
}
</style>

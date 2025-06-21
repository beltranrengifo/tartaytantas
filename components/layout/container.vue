<template>
  <component
    :is="tag"
    class="content-container mx-auto md:flex-row flex-col flex-wrap"
    :class="[
      {
        'content-container--boxed': boxed,
        'content-container--fullwidth': fullwidth,
        flex,
      },
      classes,
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Container } from '@/types/index'

export default {
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
    classes: {
      type: String as () => Container['classes'],
      default: 'mt-0',
    },
  },
})
</script>

<style lang="scss" scoped>
.content-container {
  overflow: hidden;
  @include breakpoint(only-phone) {
    margin-bottom: rem(-2);
  }
  &:not(.content-container--fullwidth):not(.content-container--boxed) {
    max-width: $--xxl;
  }
  &--boxed {
    max-width: $--xl;
  }
}
</style>

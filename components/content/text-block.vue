<template>
  <container
    class="text-block flex justify-center items-center flex-shrink-0 flex-grow-0"
    :class="[`h-${getHeight} w-${getWidth} bg-${background}`]"
    fullwidth
  >
    <component
      :is="tag"
      class="text-block__content relative font-serif text-2xl"
      :class="[
        `w-t-block-${getContentWidth}`,
        `text-${getColor}`,
        { 'text-block__content--decorate': decorate },
      ]"
    >
      {{ content }}
    </component>
  </container>
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
    decorate: {
      type: Boolean as () => TextBlock['decorate'],
      default: false,
    },
    tag: {
      type: String as () => TextBlock['tag'],
      default: 'p',
    },
    color: {
      type: String as () => TextBlock['color'],
      default: 'base',
    },
    contentWidth: {
      type: String as () => TextBlock['contentWidth'],
      default: 'md',
    },
    width: {
      type: String as () => TextBlock['width'],
      default: '1/4',
    },
    height: {
      type: String as () => TextBlock['height'],
      default: 'auto',
    },
    background: {
      type: String as () => TextBlock['background'],
      default: 'primary',
    },
  },

  computed: {
    getContentWidth(): string {
      return this.contentWidth || 'md'
    },
    getWidth(): string {
      return this.width || '1/4'
    },
    getHeight(): string {
      return this.height || 'auto'
    },
    getColor(): string {
      return this.color || 'base'
    },
  },
})
</script>

<style lang="scss" scoped>
.text-block {
  min-height: $--section-min-h;
  &__content {
    &--decorate {
      &::before,
      &::after {
        content: '';
        height: rem(3);
        background-color: inherit;
        width: calc(100% + 12px);
        position: absolute;
        left: 0;
        transform: translateX(rem(-12));
      }
      &::before {
        top: rem(-64);
      }
      &::after {
        bottom: rem(-64);
      }
    }
  }
}
</style>

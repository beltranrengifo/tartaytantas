<template>
  <container
    tag="article"
    class="text-block flex justify-center items-center flex-shrink-0 flex-grow-0 w-full"
    :class="[`min-h-${getHeight} md:w-${getWidth} bg-${background}`]"
    fullwidth
  >
    <component
      :is="tag"
      v-sanitize.nothing="content"
      class="text-block__content relative font-serif text-lg"
      :class="[
        `w-text-block-${getContentWidth}`,
        `text-${getColor}`,
        getDecoration,
        extraClasses,
        isParagraph ? 'md:text-base' : 'md:text-2xl',
      ]"
    />
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
    decoration: {
      type: Boolean as () => TextBlock['decoration'],
      default: false,
    },
    decorationColor: {
      type: String as () => TextBlock['decorationColor'],
      default: 'base-color',
    },
    tag: {
      type: String as () => TextBlock['tag'],
      default: 'p',
    },
    color: {
      type: String as () => TextBlock['color'],
      default: 'base-color',
    },
    contentWidth: {
      type: String as () => TextBlock['contentWidth'],
      default: 'md',
      validator: (val: string): boolean => ['md', 'sm'].includes(val),
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
    extraClasses: {
      type: String as () => TextBlock['extraClasses'],
      default: '',
    },
    isParagraph: {
      type: Boolean as () => TextBlock['isParagraph'],
      default: false,
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

    getDecoration(): string | null {
      return (
        (this.decoration &&
          `border-t-3 border-${this.decorationColor} border-b-3 border-${this.decorationColor} 2xl:pt-16 2xl:pb-16 xl:pt-12 xl:pb-12 lg:pt-8 lg:pb-8 pt-4 pb-4`) ||
        null
      )
    },
  },
})
</script>

<style lang="scss" scoped>
.text-block {
  min-height: $--section-min-h;
}
</style>

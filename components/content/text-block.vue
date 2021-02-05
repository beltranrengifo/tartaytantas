<template>
  <container
    tag="article"
    class="text-block flex justify-center items-center flex-shrink-0 flex-grow-0 w-full p-6 md:p-0"
    :class="[height, width, background]"
    fullwidth
  >
    <component
      :is="tag"
      ref="text"
      v-sanitize.nothing="content"
      class="text-block__content relative font-serif text-lg"
      :class="[
        contentWidth,
        getColor,
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
import HandleNuxtLinksInWysiwyg from '@/mixins/handle-links'

export default Vue.extend({
  name: 'TextBlock',

  mixins: [HandleNuxtLinksInWysiwyg],

  props: {
    content: {
      type: String as () => TextBlock['content'],
      required: true,
    },
    decoration: {
      type: [
        Boolean as () => TextBlock['decoration'],
        String as () => TextBlock['decoration'],
      ],
      default: false,
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
      default: 'w-text-block-md',
      validator: (val: string): boolean =>
        ['w-text-block-sm', 'w-text-block-md'].includes(val),
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
    getColor(): string {
      return this.color || 'text-base'
    },

    getDecoration(): string | null {
      return (
        (this.decoration &&
          `border-t-2 border-b-2 2xl:pt-20 2xl:pb-20 xl:pt-16 xl:pb-16 lg:pt-12 lg:pb-12 pt-6 pb-6 ${this.decoration}`) ||
        null
      )
    },
  },

  mounted(): void {
    ;(this as any).handleNuxtLinksInWysiwyg((this as any).$refs['text'])
  },
})
</script>

<style lang="scss" scoped>
.text-block {
  min-height: rem(400);
  &__content {
    max-width: 100%;
  }
}
</style>

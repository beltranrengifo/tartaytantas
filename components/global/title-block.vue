<template>
  <container
    tag="article"
    :class="[
      paddingTop,
      paddingBottom,
      `text-${align}`,
      `w-${width}`,
      `min-h-${height}`,
    ]"
  >
    <component
      :is="titleTag"
      class="text-lg mb-6"
      :class="[`font-${font}`, transform]"
    >
      <slot />
    </component>
    <component :is="subtitleTag" class="text-sm">
      <slot name="subtitle" />
    </component>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { TitleBlock } from '@/types/index'

export default Vue.extend({
  name: 'TitleBlock',

  props: {
    titleTag: {
      type: String as () => TitleBlock['titleTag'],
      default: 'h2',
    },
    transform: {
      type: String as () => TitleBlock['transform'],
      default: 'none',
    },
    align: {
      type: String as () => TitleBlock['align'],
      default: 'left',
    },
    font: {
      type: String as () => TitleBlock['font'],
      default: 'serif',
    },
    subtitleTag: {
      type: String as () => TitleBlock['subtitleTag'],
      default: 'h3',
    },
    paddingTop: {
      type: String as () => TitleBlock['paddingTop'],
      default: 'pt-10',
    },
    paddingBottom: {
      type: String as () => TitleBlock['paddingBottom'],
      default: 'pb-10',
    },
    href: {
      type: [
        String as () => TitleBlock['href'],
        Boolean as () => TitleBlock['href'],
      ],
      default: false,
    },
    target: {
      type: String as () => TitleBlock['target'],
      default: '_self',
    },
    width: {
      type: String as () => TitleBlock['width'],
      default: 'full',
    },
    height: {
      type: String as () => TitleBlock['height'],
      default: 'auto',
    },
  },
})
</script>

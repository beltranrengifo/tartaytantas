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
    <div class="flex flex-col justify-center h-full">
      <component
        :is="titleTag"
        v-sanitize.nothing="title"
        class="text-lg mb-6"
        :class="[`font-${font}`, transform]"
      />
      <component
        :is="subtitleTag"
        v-if="subtitle"
        v-sanitize.nothing="subtitle"
        class="text-sm"
      />
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { TitleBlock } from '@/types/index'
export default Vue.extend({
  name: 'TitleBlock',
  props: {
    title: {
      type: String as () => TitleBlock['title'],
      required: true,
    },
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
    vAlign: {
      type: String as () => TitleBlock['vAlign'],
      default: '',
    },
    font: {
      type: String as () => TitleBlock['font'],
      default: 'serif',
    },
    subtitle: {
      type: String as () => TitleBlock['subtitle'],
      default: '',
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
    maxWidth: {
      type: String as () => TitleBlock['maxWidth'],
      default: 'none',
    },
    height: {
      type: String as () => TitleBlock['height'],
      default: 'auto',
    },
  },

  computed: {
    getVAlign() {
      return `flex flex-col justify-center h-full`
    },
  },
})
</script>

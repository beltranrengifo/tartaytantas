<template>
  <container
    class="w-full"
    :class="[paddingTop, paddingBottom, `text-${align}`]"
  >
    <interactive-tag :link="href" :link-target="target">
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
    </interactive-tag>
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
    font: {
      type: String as () => TitleBlock['font'],
      default: 'serif',
    },
    subtitle: {
      type: String as () => TitleBlock['subtitle'],
      default: false,
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
  },
})
</script>

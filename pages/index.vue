<template>
  <container v-if="home" tag="div" fullwidth class="bg-tertiary">
    <container
      v-for="section in home"
      :id="section.name"
      :key="section.name"
      v-bind="section.options"
    >
      <component
        :is="component.name"
        v-for="(component, i) in section.components"
        :key="`${section.name}-${component.name}-${i}`"
        v-bind="component.options"
      />
    </container>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

import { home } from '@/content'

import Hero from '@/components/content/hero.vue'
import TextBlock from '@/components/content/text-block.vue'
import ImageBlock from '@/components/content/image-block.vue'
import TitleBlock from '@/components/content/title-block.vue'
import ImageGrid from '@/components/content/image-grid.vue'

export default Vue.extend({
  name: 'Home',

  components: {
    Hero,
    TextBlock,
    ImageBlock,
    TitleBlock,
    ImageGrid,
  },

  mixins: [MetaData],

  asyncData(): object {
    return {
      home,
    }
  },

  head(): object {
    return (this as any).getMetadata({
      title: (this as any).home.title,
      description: (this as any).home.description,
    })
  },
})
</script>

<template>
  <container tag="div" fullwidth class="bg-tertiary">
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
    <!-- <container tag="section" fullwidth>
      <hero v-bind="hero" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="introTextBlock" />
      <image-block v-bind="introImageBlock" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="claimsTextBlockA" />
      <text-block v-bind="claimsTextBlockB" />
    </container>
    <container tag="section" fullwidth class="flex">
      <image-block v-bind="cakesPicture" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="moreTextBlock" />
      <image-block v-bind="moreImageBlock" />
    </container>
    <container tag="section" fullwidth class="flex">
      <image-block v-bind="carrotImageBlock" />
      <text-block v-bind="carrotTextBlock" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="uniqueTextBlock" />
      <image-block v-bind="uniqueImageBlock" />
    </container>
    <container tag="section" fullwidth class="">
      <title-block v-bind="socialTitle" />
      <image-grid v-bind="socialImageGrid" />
    </container> -->
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

  asyncData(): any {
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

<template>
  <container v-if="sections" tag="div" fullwidth class="bg-tertiary">
    <container
      v-for="section in sections"
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

import Hero from '@/components/content/Hero.vue'
import TextBlock from '@/components/content/text-block.vue'
import ImageBlock from '@/components/content/image-block.vue'
import TitleBlock from '@/components/content/title-block.vue'
import ImageGrid from '@/components/content/image-grid.vue'
import CallToAction from '@/components/content/call-to-action.vue'
import ProductGrid from '@/components/content/product-grid.vue'
import OnePageNav from '@/components/content/one-page-nav.vue'
import Container from '@/components/layout/container.vue'

export default Vue.extend({
  name: 'SectionRenderer',

  components: {
    Hero,
    TextBlock,
    ImageBlock,
    TitleBlock,
    ImageGrid,
    CallToAction,
    OnePageNav,
    ProductGrid,
    Container,
  },

  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
})
</script>

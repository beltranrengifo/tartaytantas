<template>
  <container v-if="tartas" tag="div" fullwidth class="bg-tertiary">
    <container
      v-for="section in tartas"
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

import { tartas } from '@/content'

import Hero from '@/components/content/hero.vue'
import ProductGrid from '@/components/content/product-grid.vue'
import OnePageNav from '@/components/content/one-page-nav.vue'

export default Vue.extend({
  name: 'Tartas',

  components: {
    Hero,
    ProductGrid,
    OnePageNav,
  },

  mixins: [MetaData],

  asyncData(): object {
    return {
      tartas,
    }
  },

  head(): object {
    return (this as any).getMetadata({
      title: 'Tartaytantas | Tartas hechas en nuestro obrador',
      description:
        'Somos un pequeño obrador de tartas inspiradas en recetas clásicas, con referencias a la pastelería americana de mediados del S XX.',
    })
  },
})
</script>

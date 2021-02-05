<template>
  <container v-if="nosotros" tag="div" fullwidth class="bg-tertiary">
    <container
      v-for="section in nosotros"
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

import { nosotros } from '@/content'

import TextBlock from '@/components/content/text-block.vue'
import ImageBlock from '@/components/content/image-block.vue'
import CallToAction from '@/components/content/call-to-action.vue'

export default Vue.extend({
  name: 'Nosotros',

  components: {
    TextBlock,
    ImageBlock,
    CallToAction,
  },

  mixins: [MetaData],

  data() {
    return {
      nosotros,
    }
  },

  asyncData(): object {
    return {
      nosotros,
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

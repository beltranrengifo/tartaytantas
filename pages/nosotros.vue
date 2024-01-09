<template>
  <section-renderer :sections="nosotros" />
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'
import SectionRenderer from '@/components/content/section-renderer.vue'

import { nosotros } from '@/content'

export default Vue.extend({
  name: 'Nosotros',

  components: {
    SectionRenderer,
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

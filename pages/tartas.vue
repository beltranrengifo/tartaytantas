<template>
  <section-renderer :sections="tartas" />
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

import { tartas } from '@/content'

export default Vue.extend({
  name: 'Tartas',

  mixins: [MetaData],

  data() {
    return {
      tartas,
    }
  },

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

<template>
  <section-renderer :sections="legal" />
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

import { legal } from '@/content'

export default Vue.extend({
  name: 'Legal',

  mixins: [MetaData],

  data() {
    return {
      legal,
    }
  },

  asyncData(): object {
    return {
      legal,
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

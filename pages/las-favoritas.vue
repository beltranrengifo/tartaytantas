<template>
  <section>
    <section-renderer :sections="landing" />
    <floating-actions />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'
import { landing } from '@/content'

export default Vue.extend({
  name: 'Landing',
  mixins: [MetaData],
  data() {
    return {
      landing,
    }
  },
  asyncData(): object {
    return {
      landing,
    }
  },
  head(): object {
    return (this as any).getMetadata({
      title:
        'Tartaytantas | Las tartas favoritas de nuestros clientes de siempre',
      description:
        'Somos un pequeño obrador de tartas inspiradas en recetas clásicas, con referencias a la pastelería americana de mediados del S XX.',
    })
  },
})
</script>

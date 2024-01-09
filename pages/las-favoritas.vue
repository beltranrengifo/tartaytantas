<template>
  <section>
    <section-renderer :sections="landing" />
    <landing-floating-actions />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'
import { landing } from '@/content'
import SectionRenderer from '@/components/content/section-renderer.vue'
import LandingFloatingActions from '@/components/layout/landing-floating-actions.vue'

export default Vue.extend({
  name: 'Landing',
  components: {
    SectionRenderer,
    LandingFloatingActions,
  },
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

<template>
  <section-renderer :sections="home" />
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'
import SectionRenderer from '@/components/content/section-renderer.vue'

import { home } from '@/content'

export default Vue.extend({
  name: 'Home',

  components: {
    SectionRenderer,
  },

  mixins: [MetaData],

  data() {
    return {
      home,
    }
  },

  asyncData(): object {
    return {
      home,
    }
  },

  head(): object {
    return {
      ...(this as any).getMetadata({
        title: 'Tartaytantas | Obrador de tartas en Aravaca, Madrid',
        description:
          'Somos un pequeño obrador de tartas inspiradas en recetas clásicas, con referencias a la pastelería americana de mediados del S XX.',
      }),
      ...(this as any).getMetaPixel(),
    }
  },
})
</script>

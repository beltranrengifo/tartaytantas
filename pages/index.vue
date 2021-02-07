<template>
  <section-renderer :sections="home" />
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

import { home } from '@/content'

export default Vue.extend({
  name: 'Home',

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
    return (this as any).getMetadata({
      title: 'Tartaytantas | Obrador de tartas en Aravaca, Madrid',
      description:
        'Somos un pequeño obrador de tartas inspiradas en recetas clásicas, con referencias a la pastelería americana de mediados del S XX.',
    })
  },
})
</script>

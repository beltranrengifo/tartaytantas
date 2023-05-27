<template>
  <div>
    <p>Path: {{}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

export default Vue.extend({
  name: 'Tarta Single Page',

  mixins: [MetaData],

  data() {
    return {}
  },

  asyncData(): object {
    return {}
  },

  head(): object {
    console.log(this.$route)
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

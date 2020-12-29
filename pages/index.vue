<template>
  <container tag="div" fullwidth>
    <hero v-bind="hero" />
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    const { hero }: any = await $content('home').fetch()
    return {
      hero,
    }
  },
})
</script>

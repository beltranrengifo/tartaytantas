<template>
  <container tag="div" fullwidth>
    <hero v-bind="hero" />
    <section>
      <text-block />
    </section>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    const { hero, intro }: any = await $content('home').fetch()
    return {
      hero,
      intro,
    }
  },
})
</script>

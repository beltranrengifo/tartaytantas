<template>
  <container tag="div" fullwidth>
    <container tag="section" fullwidth>
      <hero v-bind="hero" />
    </container>
    <!-- <section class="flex">
      <text-block v-bind="textBlock" />
      <image-block v-bind="imageBlock" />
    </section> -->
  </container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',

  async asyncData({ $content }): Promise<Object> {
    const {
      hero: {
        components: {
          carousel: {
            options: { slides },
          },
          logo: { options: logo },
        },
      },
    }: any = await $content('home').fetch()

    return {
      hero: {
        slides,
        ...logo,
      },
      /* textBlock,
      imageBlock, */
    }
  },
})
</script>

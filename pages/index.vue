<template>
  <container tag="div" fullwidth class="bg-tertiary">
    <nuxt-content :document="home" />
    <!-- <container tag="section" fullwidth>
      <hero v-bind="hero" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="introTextBlock" />
      <image-block v-bind="introImageBlock" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="claimsTextBlockA" />
      <text-block v-bind="claimsTextBlockB" />
    </container>
    <container tag="section" fullwidth class="flex">
      <image-block v-bind="cakesPicture" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="moreTextBlock" />
      <image-block v-bind="moreImageBlock" />
    </container>
    <container tag="section" fullwidth class="flex">
      <image-block v-bind="carrotImageBlock" />
      <text-block v-bind="carrotTextBlock" />
    </container>
    <container tag="section" fullwidth class="flex">
      <text-block v-bind="uniqueTextBlock" />
      <image-block v-bind="uniqueImageBlock" />
    </container>
    <container tag="section" fullwidth class="">
      <title-block v-bind="socialTitle" />
      <image-grid v-bind="socialImageGrid" />
    </container> -->
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

export default Vue.extend({
  name: 'Home',

  mixins: [MetaData],

  async asyncData({ $content }): Promise<Object> {
    const home = await $content('home').fetch()
    return { home }
  },

  head(): object {
    return (this as any).getMetadata({
      title: (this as any).home.title,
      description: (this as any).home.description,
    })
  },
})
</script>

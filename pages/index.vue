<template>
  <container tag="div" fullwidth>
    <container tag="section" fullwidth>
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
      intro: {
        components: {
          textBlock: { options: introTextBlock },
          imageBlock: { options: introImageBlock },
        },
      },
      claims: {
        components: {
          textBlockA: { options: claimsTextBlockA },
          textBlockB: { options: claimsTextBlockB },
        },
      },
      cakesPicture: {
        components: {
          imageBlock: { options: cakesPicture },
        },
      },
      more: {
        components: {
          textBlock: { options: moreTextBlock },
          imageBlock: { options: moreImageBlock },
        },
      },
    }: any = await $content('home').fetch()

    return {
      hero: {
        slides,
        ...logo,
      },
      introTextBlock,
      introImageBlock,
      claimsTextBlockA,
      claimsTextBlockB,
      cakesPicture,
      moreTextBlock,
      moreImageBlock,
    }
  },
})
</script>

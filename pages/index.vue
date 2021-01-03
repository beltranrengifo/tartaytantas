<template>
  <container tag="div" fullwidth class="bg-tertiary">
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
    </container>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import MetaData from '@/mixins/meta-data'

export default Vue.extend({
  name: 'Home',

  mixins: [MetaData],

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
      carrotCake: {
        components: {
          imageBlock: { options: carrotImageBlock },
          textBlock: { options: carrotTextBlock },
        },
      },
      unique: {
        components: {
          textBlock: { options: uniqueTextBlock },
          imageBlock: { options: uniqueImageBlock },
        },
      },
      social: {
        components: {
          titleBlock: { options: socialTitle },
          imageGrid: { options: socialImageGrid },
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
      carrotImageBlock,
      carrotTextBlock,
      uniqueTextBlock,
      uniqueImageBlock,
      socialTitle,
      socialImageGrid,
    }
  },
  head(): object {
    return (this as any).getMetadata({
      title: (this as any).home.title,
      description: (this as any).home.description,
    })
  },
})
</script>

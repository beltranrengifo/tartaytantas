<template>
  <container boxed>
    <figure>
      <img :src="getImage" :alt="imageAlt" />
    </figure>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { FeaturedProduct } from '@/types/index'

export default Vue.extend({
  name: 'FeaturedProduct',

  props: {
    title: {
      type: String as () => FeaturedProduct['title'],
      required: true,
    },
    content: {
      type: String as () => FeaturedProduct['content'],
      required: true,
    },
    pricing: {
      type: String as () => FeaturedProduct['pricing'],
      required: true,
    },
    image: {
      type: String as () => FeaturedProduct['image'],
      required: true,
    },
    imageAlt: {
      type: String as () => FeaturedProduct['imageAlt'],
      default: 'Tartaytantas',
    },
  },

  computed: {
    getImage(): Nullable<string> {
      try {
        return require(`@/assets/${this.image}`)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`Cannot find image in featured product: ${e}`)
        return null
      }
    },
  },
})
</script>

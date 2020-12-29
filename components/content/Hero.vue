<template>
  <container tag="section" fullwidth class="hero relative">
    <main>
      <figure class="hero__bg-image">
        <img :src="getImage" :alt="imageAlt" />
      </figure>
      <figure class="hero__logo-image absolute top-0">
        <img :src="getLogo" :alt="logoAlt" />
      </figure>
    </main>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hero } from '@/types/index'

export default Vue.extend({
  name: 'Hero',

  props: {
    image: {
      type: String as () => Hero['image'],
      required: true,
    },
    imageAlt: {
      type: String as () => Hero['imageAlt'],
      default: 'Tartaytantas',
    },
    logo: {
      type: String as () => Hero['logo'],
      default: '',
    },
    logoAlt: {
      type: String as () => Hero['logoAlt'],
      default: 'Tartaytantas',
    },
  },

  computed: {
    getImage(): String {
      return require(`@/assets/images/${this.image}`)
    },

    getLogo(): String {
      return require(`@/assets/images/${this.logo}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.hero {
  &__logo-image {
    width: 25vw;
    max-width: rem(460);
    left: 20%;
    margin-top: rem(-2);
  }
}
</style>

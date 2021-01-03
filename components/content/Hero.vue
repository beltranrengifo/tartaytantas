<template>
  <container tag="article" fullwidth class="hero relative">
    <main>
      <carousel :slides="slides" />
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
    slides: {
      type: Array as () => Hero['slides'],
      required: true,
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
    left: 15%;
    margin-top: rem(-2);
    img {
      &:hover {
        mix-blend-mode: color-burn;
      }
    }
  }
}
</style>

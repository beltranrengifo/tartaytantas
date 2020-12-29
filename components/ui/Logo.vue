<template>
  <div class="logo">
    <n-link :to="link">
      <img :src="getLogoImage" :alt="altText" class="logo__image" />
    </n-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Logo',

  props: {
    link: {
      type: String,
      default: '/',
    },
    logo: {
      type: String,
      default: 'tartaytantas-logo-text.svg',
    },
    altText: {
      type: String,
      default: 'Tartaytantas Logo',
    },
  },

  computed: {
    getLogoImage(): string {
      return require(`@/assets/images/${this.logo}`)
    },
  },
})
</script>

<style lang="scss" scoped>
.logo {
  &__image {
    width: rem(204);
    max-width: 100%;
  }
}
</style>

<template>
  <div class="logo" :class="{ 'logo--is-sticky': $state.stickyNav }">
    <n-link :to="link" class="no-decoration">
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
      default: 'tartaytantas-v.svg',
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
  $--self: &;
  &__image {
    width: rem(124);
    max-width: 100%;
    transition: $--logo-t;
    opacity: 0;
  }
  &--is-sticky {
    #{$--self}__image {
      width: rem(75);
      opacity: 1;
    }
  }
}
</style>

<template>
  <div class="logo" :class="{ 'logo--is-sticky': isSticky }">
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
    isSticky: {
      type: Boolean,
      default: false,
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
    width: rem(136);
    max-width: 100%;
    transition: $--logo-t;
    opacity: 0;
  }
  &--is-sticky {
    #{$--self}__image {
      width: rem(110);
      opacity: 1;
    }
  }
}
</style>

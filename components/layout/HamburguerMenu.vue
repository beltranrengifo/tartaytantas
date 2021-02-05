<template>
  <div class="hamburguer-menu">
    <div
      role="button"
      class="hamburguer-menu__button"
      @click="handleMobileNavigation"
      :class="{ 'hamburguer-menu__button--open': $state.showMobileNav }"
    >
      <span v-for="index in 3" :key="index" class="hamburguer-menu__stick" />
    </div>
    <transition name="slide-fade">
      <Navigation
        v-show="$state.showMobileNav"
        ref="mobile-nav"
        :is-mobile="$state.isMobileNav"
        class="hamburguer-menu__nav"
        @handleLinkClick="handleMobileNavigation"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { handleBodyScroll } from '@/plugins/body-scroll'

export default Vue.extend({
  name: 'HamburguerMenu',

  data() {
    return {
      navigationIsVisible: false,
    }
  },

  beforeDestroy(): void {
    handleBodyScroll({
      shouldLockScroll: false,
      shouldClear: true,
      ref: (this as any).$refs['mobile-nav'],
    })
  },

  methods: {
    async handleMobileNavigation(): Promise<void> {
      await (this as any).$state.mutate(
        'showMobileNav',
        !(this as any).$state.showMobileNav
      )

      handleBodyScroll({
        shouldLockScroll: (this as any).$state.showMobileNav,
        shouldClear: false,
        ref: (this as any).$refs['mobile-nav'],
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.hamburguer-menu {
  $--self: &;

  position: fixed;
  top: rem(8);
  right: rem(8);

  &__nav {
    z-index: 13;
    position: fixed;
    background-color: white;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }

  &__button {
    z-index: 14;
    position: relative;
    width: rem(40);
    height: rem(28);
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;

    &--open {
      #{$--self}__stick:nth-child(1) {
        transform: rotate(45deg);
        top: 0;
        left: 3px;
      }

      #{$--self}__stick:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      #{$--self}__stick:nth-child(3) {
        transform: rotate(-45deg);
        top: 28px;
        left: 3px;
      }
    }
  }

  &__stick {
    display: block;
    position: absolute;
    height: rem(4);
    width: 100%;
    background: #d3531a;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: rem(12);
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: rem(24);
      transform-origin: left center;
    }
  }
}
</style>

<template>
  <transition name="fade">
    <nav
      class="one-page-nav fixed w-full bg-primary opacity-0 hidden md:block"
      :class="{ 'one-page-nav--visible': $state.stickyNav }"
    >
      <scrollactive class="flex justify-center items-center h-10" tag="ul">
        <li v-for="item in nav" :key="item.link">
          <a
            :href="item.link"
            class="one-page-nav__link mx-4 text-xs scrollactive-item no-decoration text-dark"
          >
            {{ item.name }}
          </a>
        </li>
      </scrollactive>
    </nav>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { OnePageNav } from '@/types'

export default Vue.extend({
  name: 'OnePageNav',

  props: {
    nav: {
      type: Array as () => OnePageNav['nav'],
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.one-page-nav {
  top: rem(45);
  transform: translateY(-20px);
  transition: all 0.4s ease-out;
  &--visible {
    transition: all 0.4s ease-out;
    transform: translateY(0);
    @apply z-10;
    @apply opacity-100;
  }

  li {
    &::marker {
      display: none;
    }
  }

  &__link {
    position: relative;
    &.is-active {
      &::after {
        content: '';
        background-color: var(--color-white);
        width: 100%;
        height: rem(1);
        position: absolute;
        bottom: rem(-2);
        left: 0;
      }
    }
  }
}
</style>

<template>
  <nav
    role="navigation"
    class="flex items-center md:items-end"
    :class="[isSecondaryNav ? 'justify-end' : 'justify-between']"
  >
    <ul class="flex" :class="{ 'flex-col': isSecondaryNav }">
      <li
        v-for="item in navigation"
        :key="item.name"
        class="navigation-item mx-6"
        :class="{
          'navigation-item--is-sticky': isSticky,
          'navigation-item--is-secondary': isSecondaryNav,
        }"
      >
        <component
          :is="getLinkTag(item)"
          v-bind="getLinkProps(item)"
          class="navigation-item__inner text-navigation"
        >
          {{ item.name }}
        </component>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { navigation } from '@/config'
import { NavigationItem } from '@/types/index'

export default Vue.extend({
  name: 'Navigation',

  props: {
    isSticky: {
      type: Boolean,
      default: false,
    },
    isSecondaryNav: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      navigation,
    }
  },

  computed: {
    getLinkTag(): Function {
      return ({ target }: NavigationItem): string => {
        return target.includes('self') ? 'n-link' : 'a'
      }
    },

    getLinkProps(): Function {
      return ({ target, path }: NavigationItem): object => {
        return target.includes('self')
          ? {
              to: path,
            }
          : {
              href: path,
              target,
            }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.navigation-item {
  $--self: &;

  transition: $--nav-item-t;
  &__inner {
    font-size: rem(13);
    color: var(--color-dark);
    &:not(.nuxt-link-exact-active):not(:hover) {
      &::after {
        width: 0;
        background-color: transparent;
        height: rem(1);
      }
    }
    &:not(.nuxt-link-exact-active):hover {
      &::after {
        height: rem(1);
      }
    }
    &.nuxt-link-exact-active {
      color: var(--color-white);
      &::after {
        height: rem(1);
      }
    }
  }

  &--is-sticky {
    #{$--self}__inner {
      font-size: rem(12);
      color: var(--color-dark);
      &.nuxt-link-exact-active {
        color: var(--color-base);
      }
    }
  }

  &--is-secondary {
    #{$--self}__inner {
      font-size: rem(12);
      color: var(--color-dark);
      @apply mb-4;
      @apply inline-block;

      &.nuxt-link-exact-active {
        color: var(--color-brand);
        &::after {
          display: none;
        }
      }

      &:not(.nuxt-link-exact-active):hover {
        &::after {
          background-color: var(--color-brand);
        }
      }
    }
  }
}
</style>

<template>
  <nav
    role="navigation"
    class="flex flex-col justify-between items-center md:items-end"
  >
    <ul class="flex">
      <li
        v-for="item in navigation"
        :key="item.name"
        class="navigation-item mx-6"
        :class="{ 'navigation-item--is-sticky': isSticky }"
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
    font-size: rem(14);
    &:not(.nuxt-link-exact-active):not(:hover) {
      &::after {
        background-color: transparent;
      }
    }
    &.nuxt-link-exact-active {
      color: var(--color-base);
    }
  }
  &--is-sticky {
    #{$--self}__inner {
      font-size: rem(12);
    }
  }
}
</style>

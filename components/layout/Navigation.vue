<template>
  <nav class="flex flex-col justify-between items-center md:items-end">
    <ul class="flex">
      <li
        v-for="item in navigation"
        :key="item.name"
        class="navigation-item mx-6"
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
import { navigationItem } from '@/types/index'

export default Vue.extend({
  name: 'Navigation',

  data() {
    return {
      navigation,
    }
  },

  computed: {
    getLinkTag(): Function {
      return ({ target }: navigationItem): string => {
        return target.includes('self') ? 'n-link' : 'a'
      }
    },

    getLinkProps(): Function {
      return ({ target, path }: navigationItem): object => {
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
  &__inner {
    font-size: rem(16);
    &:not(.nuxt-link-exact-active):not(:hover) {
      &::after {
        background-color: transparent;
      }
    }
    &.nuxt-link-exact-active {
      color: var(--color-base);
    }
  }
}
</style>

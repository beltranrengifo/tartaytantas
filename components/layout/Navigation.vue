<template>
  <nav
    role="navigation"
    class="navigation flex items-center"
    :class="[getNavClasses, { 'navigation--is-mobile': isMobile }]"
  >
    <ul class="navigation__list flex" :class="{ 'flex-col': isSecondaryNav }">
      <li
        v-for="item in navigation"
        :key="item.name"
        class="navigation-item sm:mx-6"
        :class="{
          'navigation-item--is-sticky': $state.stickyNav,
          'navigation-item--is-secondary': isSecondaryNav,
        }"
        @click="handleLinkClick"
      >
        <component
          :is="getLinkTag(item)"
          v-bind="getLinkProps(item)"
          class="navigation-item__inner text-navigation"
        >
          {{ item.name }}
        </component>
      </li>
      <li
        class="navigation-item sm:mx-6"
        :class="{
          'navigation-item--is-sticky': $state.stickyNav,
          'navigation-item--is-secondary': isSecondaryNav,
        }"
      >
        <span
          class="navigation-item__inner text-navigation snipcart-checkout cursor-pointer relative snipcart-items-info"
        >
          <span v-show="cartCount" class="snipcart-items-count"></span>
          Cesta
          <span v-show="cartCount" class="snipcart-total-price"></span>
        </span>
      </li>
      <li
        class="navigation-item sm:mx-6"
        :class="{
          'navigation-item--is-sticky': $state.stickyNav,
          'navigation-item--is-secondary': isSecondaryNav,
        }"
      >
        <button
          class="navigation-item__inner text-navigation snipcart-checkout cursor-pointer snipcart-customer-signin navigation-item__account"
        >
          <img
            :src="require('@/assets/images/user-profile-account-person.svg')"
            alt="Mi cuenta"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavigationItem } from '@/types/index'

const NAVIGATION = [
  { name: 'Inicio', path: '/', target: '_self' },
  { name: 'Tartas', path: '/tartas', target: '_self' },
  { name: 'Las favoritas', path: '/las-favoritas', target: '_self' },
  { name: 'Nosotras', path: '/nosotros', target: '_self' },
] as const

export default Vue.extend({
  name: 'Navigation',

  props: {
    isSecondaryNav: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      navigation: NAVIGATION,
      cartCount: 0,
    }
  },

  created() {
    if (!process.client) return
    document.addEventListener('snipcart.ready', () => {
      Snipcart.store.subscribe(() => {
        this.cartCount = Snipcart.store.getState().cart.items.count
      })
    })
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

    getNavClasses(): string {
      if (this.isSecondaryNav) return 'sm:justify-end'
      if (this.isMobile) return 'justify-center items-center'
      return 'justify-between'
    },
  },

  methods: {
    handleLinkClick(): void {
      this.$emit('handleLinkClick')
    },
  },
})
</script>

<style lang="scss" scoped>
.navigation-item {
  $--self: &;

  .snipcart-total-price,
  .snipcart-items-count {
    background-color: var(--color-primary);
    text-align: center;
    color: var(--color-white);
    font-size: 12px;
    position: relative;
    top: -3px;
    height: 18px;
    display: inline-block;
  }
  .snipcart-total-price {
    border-radius: 8px;
    padding: 1px 6px;
  }
  .snipcart-items-count {
    border-radius: 50%;
    width: 18px;
  }

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
.navigation {
  $--self: &;

  .navigation-item {
    &__account {
      img {
        width: 26px;
      }
    }
  }

  &--is-mobile {
    #{$--self}__list {
      flex-direction: column;
    }

    .navigation-item {
      &__inner {
        font-size: rem(18);
        color: var(--color-dark);
        @apply mb-6;
        @apply block;
      }
    }
  }
}
</style>

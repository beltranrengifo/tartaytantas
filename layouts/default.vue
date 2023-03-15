<template>
  <section class="flex flex-col h-full">
    <Header
      class="main-header"
      :class="{ 'main-header--shrink': $state.stickyNav }"
    />
    <main
      role="main"
      class="main-content flex-auto"
      :class="{ 'main-content--expand': $state.stickyNav }"
    >
      <Nuxt />
    </main>
    <Footer class="flex-shrink-0" :content="footer" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { debounce } from 'lodash'

import Parallax from '@/mixins/parallax.vue'
import HandleShippingCosts from '~/mixins/handle-shipping-costs'
import HandleDeliveryDate from '~/mixins/handle-delivery-date'
import { layout } from '@/content'

import { SHOW_MENU_SCROLL_THRESHOLD } from '@/config'

declare const Snipcart: any

export default Vue.extend({
  mixins: [Parallax, HandleShippingCosts, HandleDeliveryDate],

  fetch(): void {
    const { footer } = layout
    this.footer = footer
  },

  data(): any {
    const scrollPosition: Nullable<number> = 0
    return {
      scrollPosition,
      footer: '',
    }
  },

  mounted() {
    window.onscroll = debounce(async () => {
      this.scrollPosition = window.scrollY
      await this.$state.mutate(
        'stickyNav',
        this.scrollPosition > SHOW_MENU_SCROLL_THRESHOLD
      )
    }, 25)

    this.$state.handleScreenSize()
  },

  created() {
    if (!process.client) return

    document.addEventListener(
      'snipcart.ready',
      () => {
        document.addEventListener('click', this.handleDeliveryDate)

        Snipcart.events.on('shipping.selected', () => {
          this.handleShippingCosts({
            snipcartStore: Snipcart.store,
          })
        })
      },
      { once: true }
    )
  },

  head() {
    const openGraphImage = require('@/assets/images/nosotros.jpg')
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.baseUrl + openGraphImage,
        },
        {
          name: 'facebook-domain-verification',
          content: '4ufv34jltv1cuzb0vd6lii1vrpg20m',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.main-header {
  transition: $--header-t;
  height: $--header-h;
  &--shrink {
    height: $--header-h-shrink;
    @include breakpoint(sm) {
      background-color: var(--color-tertiary);
    }
  }
}
</style>

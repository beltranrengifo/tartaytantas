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
import { layout } from '@/content'

import { SHOW_MENU_SCROLL_THRESHOLD } from '@/config'

export default Vue.extend({
  mixins: [Parallax],

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

  head() {
    const openGraphImage = require('@/assets/images/nosotros.jpg')
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.baseUrl + openGraphImage,
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

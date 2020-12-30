<template>
  <section class="flex flex-col h-full">
    <Header
      class="main-header"
      :class="{ 'main-header--shrink': stickyHeader }"
      :is-sticky="stickyHeader"
    />
    <main
      class="main-content flex-auto"
      :class="{ 'main-content--expand': stickyHeader }"
    >
      <Nuxt />
    </main>
    <Footer class="flex-shrink-0" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { debounce } from 'lodash'

const SCROLL_THRESHOLD: number = 50

export default Vue.extend({
  data() {
    const scrollPosition: Nullable<number> = 0
    return {
      scrollPosition,
    }
  },

  computed: {
    stickyHeader(): boolean {
      return this.scrollPosition > SCROLL_THRESHOLD
    },
  },

  mounted() {
    window.onscroll = debounce(() => (this.scrollPosition = window.scrollY), 25)
  },
})
</script>

<style lang="scss" scoped>
.main-header {
  transition: $--header-t;
  height: $--header-h;
  &--shrink {
    height: $--header-h-shrink;
    background-color: var(--color-tertiary);
  }
}
</style>

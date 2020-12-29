<template>
  <header
    class="sticky top-0 header p-5 flex items-center flex-col sm:flex-row sm:justify-between flex-shrink-0 bg-tertiary z-10"
  >
    <Logo class="self-center sm:self-auto mb-4 sm:m-0" />
    <Navigation class="self-center sm:self-auto mb-4 sm:m-0" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',

  data() {
    const scrollPosition: Nullable<number> = 0
    return {
      scrollPosition,
    }
  },

  methods: {
    updateScroll(): void {
      this.scrollPosition = window.scrollY
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  height: $--header-h;
}
</style>

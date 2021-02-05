<template>
  <header
    class="fixed w-full top-0 p-5 flex items-center flex-col sm:flex-row sm:justify-between flex-shrink-0 z-20"
  >
    <Logo class="self-center sm:self-auto mb-4 sm:m-0" />
    <Navigation
      class="hidden desktop-menu:flex self-center sm:self-auto mb-4 sm:m-0"
    />
    <hamburguer-menu class="desktop-menu:hidden" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>

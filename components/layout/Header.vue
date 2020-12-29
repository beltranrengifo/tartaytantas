<template>
  <header
    class="header p-5 flex items-center flex-col sm:flex-row sm:justify-between flex-shrink-0 bg-tertiary"
  >
    <Logo class="self-center sm:self-auto mb-4 sm:m-0" />
    <Navigation class="self-center sm:self-auto mb-4 sm:m-0" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
})
</script>

<style lang="scss" scoped>
.header {
  height: $--header-h;
}
</style>

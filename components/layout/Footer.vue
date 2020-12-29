<template>
  <footer class="px-5 py-3">
    <p>
      <small class="text-xs">
        {{ copy }}
      </small>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  computed: {
    copy(): string {
      return `© ${new Date().getFullYear()} Tartaytantas`
    },
  },
})
</script>

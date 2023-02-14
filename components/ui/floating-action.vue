<template>
  <div class="floating-action" :style="getStyles">
    <interactive-tag :link="link" link-target="_blank" class="no-decoration">
      <slot />
    </interactive-tag>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { FloatingAction } from '@/types/index'
import InteractiveTag from './interactive-tag.vue'

export default Vue.extend({
  name: 'FloatingAction',

  props: {
    link: {
      type: String as () => FloatingAction['link'],
      required: true,
    },
    position: {
      type: Object as () => FloatingAction['position'],
      default: () => ({
        right: '24px',
        bottom: '24px',
      }),
    },
  },

  computed: {
    getStyles() {
      return {
        position: this.position,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.floating-action {
  position: fixed;
  bottom: 24px;
  right: 24px;
  cursor: pointer;

  ::v-deep svg {
    width: 2.5rem !important;
    height: 2.5rem;
  }
}
</style>

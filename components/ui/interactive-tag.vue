<template>
  <component :is="getTag" v-bind="getTagProps">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { InteractiveTag } from '@/types/index'
import RemoveDomain from '@/mixins/remove-domain'

export default Vue.extend({
  name: 'InteractiveTag',

  mixins: [RemoveDomain],

  props: {
    link: {
      type: String as () => InteractiveTag['link'],
      default: '',
    },
    linkTarget: {
      type: String as () => InteractiveTag['linkTarget'],
      default: '_self',
    },
  },

  computed: {
    getTag(): string {
      let tag = 'span'
      if (!this.link) return tag

      switch (Boolean(this.link)) {
        case this.link?.includes(this.$config.baseUrl):
          tag = 'n-link'
          break
        default:
          tag = 'a'
      }
      return tag
    },

    getTagProps(): object | null {
      if (!this.link) return null
      let props = {}
      if (this.getTag === 'a') {
        props = {
          href: this.link,
          target: '_blank',
        }
      } else if (this.getTag === 'n-link') {
        props = {
          to: (this as any).removeDomain(this.link),
        }
      }
      return props
    },
  },
})
</script>

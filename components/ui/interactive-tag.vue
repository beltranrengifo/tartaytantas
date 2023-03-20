<template>
  <component
    :is="getTag"
    v-bind="getTagProps"
    :class="{
      'interactive-tag__as-button no-decoration': renderUiAsButton,
      'interactive-tag__as-button--primary': primary,
    }"
  >
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
      type: [
        String as () => InteractiveTag['link'],
        Boolean as () => InteractiveTag['link'],
      ],
      default: '',
    },
    linkTarget: {
      type: String as () => InteractiveTag['linkTarget'],
      default: '_self',
    },
    renderUiAsButton: {
      type: Boolean as () => InteractiveTag['renderUiAsButton'],
      default: false,
    },
    primary: {
      type: Boolean as () => InteractiveTag['primary'],
      default: false,
    },
    useSpaNavigation: {
      type: Boolean as () => InteractiveTag['useSpaNavigation'],
      default: false,
    },
  },

  computed: {
    getTag(): string {
      let tag = 'span'
      if (!this.link) return tag

      switch (Boolean(this.link)) {
        case typeof this.link === 'string' && this.useSpaNavigation:
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

      if (this.useSpaNavigation) {
        props = {
          to: (this as any).removeDomain(this.link),
        }
        console.log(props)
      } else if (this.getTag === 'a') {
        props = {
          href: this.link,
          target: '_blank',
        }
      }

      return props
    },
  },
})
</script>

<style lang="scss" scoped>
.interactive-tag {
  &__as-button {
    padding: 12px 24px;
    display: inline-block;
    border: 2px solid var(--color-primary);
    text-decoration: none;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--color-white);
    }

    &--primary {
      background-color: var(--color-white);
      transition: all 0.2s ease-out;
      font-weight: 600;
      border: 2px solid var(--color-primary);
      color: var(--color-primary);

      &:hover {
        background-color: var(--color-primary);
        border: 2px solid var(--color-white);
        color: var(--color-white);
      }
    }
  }
}
</style>

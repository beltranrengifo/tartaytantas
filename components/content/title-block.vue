<template>
  <container
    tag="article"
    class="w-full"
    :class="[paddingTop, paddingBottom, align, width, height]"
  >
    <div class="title-block flex flex-col justify-center h-full px-4 sm:px-0">
      <component
        ref="title"
        :is="titleTag"
        v-sanitize.nothing="title"
        class="title-block__title text-xl mb-6 tracking-normal pb-8"
        :class="[
          font,
          transform,
          extraClasses,
          { 'title-block__title--is-decorated': useDecoration },
        ]"
      />
      <component
        ref="subtitle"
        :is="subtitleTag"
        v-if="subtitle"
        v-sanitize.nothing="subtitle"
        class="font-serif text-lg leading-8"
        :class="[extraClasses]"
      />
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { TitleBlock } from '@/types/index'
import HandleNuxtLinksInWysiwyg from '@/mixins/handle-links'
import Container from '@/components/layout/container.vue'

export default Vue.extend({
  name: 'TitleBlock',

  mixins: [HandleNuxtLinksInWysiwyg],

  components: {
    Container,
  },

  props: {
    title: {
      type: String as () => TitleBlock['title'],
      required: true,
    },
    titleTag: {
      type: String as () => TitleBlock['titleTag'],
      default: 'h2',
    },
    transform: {
      type: String as () => TitleBlock['transform'],
      default: 'none',
    },
    align: {
      type: String as () => TitleBlock['align'],
      default: 'left',
    },
    vAlign: {
      type: String as () => TitleBlock['vAlign'],
      default: '',
    },
    font: {
      type: String as () => TitleBlock['font'],
      default: 'serif',
    },
    subtitle: {
      type: String as () => TitleBlock['subtitle'],
      default: '',
    },
    subtitleTag: {
      type: String as () => TitleBlock['subtitleTag'],
      default: 'h3',
    },
    paddingTop: {
      type: String as () => TitleBlock['paddingTop'],
      default: 'pt-10',
    },
    paddingBottom: {
      type: String as () => TitleBlock['paddingBottom'],
      default: 'pb-10',
    },
    href: {
      type: [
        String as () => TitleBlock['href'],
        Boolean as () => TitleBlock['href'],
      ],
      default: false,
    },
    target: {
      type: String as () => TitleBlock['target'],
      default: '_self',
    },
    width: {
      type: String as () => TitleBlock['width'],
      default: 'w-full',
    },
    maxWidth: {
      type: String as () => TitleBlock['maxWidth'],
      default: 'none',
    },
    height: {
      type: String as () => TitleBlock['height'],
      default: 'auto',
    },
    extraClasses: {
      type: String as () => TitleBlock['extraClasses'],
      default: '',
    },
    useDecoration: {
      type: Boolean as () => TitleBlock['useDecoration'],
      default: false,
    },
  },

  computed: {
    getHeight() {
      return this.height || 'auto'
    },
  },

  mounted(): void {
    ;(this as any).handleNuxtLinksInWysiwyg((this as any).$refs['title'])
    ;(this as any).handleNuxtLinksInWysiwyg((this as any).$refs['subtitle'])
  },
})
</script>

<style lang="scss" scoped>
.title-block {
  &__title {
    &--is-decorated {
      position: relative;
      &::after {
        content: '';
        height: 2px;
        width: rem(300);
        max-width: 100%;
        background-color: var(--color-primary);
        position: absolute;
        bottom: rem(-24);
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>

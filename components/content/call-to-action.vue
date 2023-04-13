<template>
  <container boxed class="call-to-action">
    <nav v-if="buttons.length" class="py-32">
      <ul
        class="flex flex-col md:flex-row md:justify-evenly items-start w-text-block-md md:w-auto my-0 mx-auto pl-8 sm:pl-0"
      >
        <li v-for="button in buttons" :key="button.link" class="mb-20 md:mb-0">
          <interactive-tag
            :link="button.link"
            :link-target="button.target"
            :useSpaNavigation="button.target === '_self'"
          >
            {{ button.text }}
          </interactive-tag>
        </li>
      </ul>
    </nav>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { CallToAction } from '@/types'

export default Vue.extend({
  name: 'CallToAction',

  props: {
    buttons: {
      type: Array as () => CallToAction['buttons'],
      required: true,
    },
    title: {
      type: String as () => CallToAction['title'],
      default: '',
    },
  },
})
</script>

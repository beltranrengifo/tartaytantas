<template>
  <container boxed>
    <nav v-if="buttons.length" class="py-32">
      <ul class="flex justify-evenly">
        <li v-for="button in buttons" :key="button.link">
          <interactive-tag :link="button.link" :link-target="button.target">
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

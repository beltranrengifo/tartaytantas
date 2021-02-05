<template>
  <footer class="px-5 py-24 bg-tertiary border-t border-primary">
    <container
      tag="section"
      boxed
      class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
    >
      <article>
        <h3 class="mb-6 text-xs">{{ footerInfoTitle }}</h3>
        <ul>
          <li
            v-for="item in footerInfo"
            :key="item"
            v-sanitize.nothing="item"
            class="mb-3 text-xs"
          />
          <li class="text-xs mt-8">
            {{ copy }}
          </li>
        </ul>
      </article>

      <article class="hidden lg:block">
        <figure>
          <img :src="getLogo" alt="Logo Tartaytantas" class="my-0 mx-auto" />
        </figure>
      </article>

      <article class="mt-12 sm:mt-0">
        <Navigation is-secondary-nav />
      </article>
    </container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',

  props: {
    content: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      logo: 'tartaytantas.svg',
    }
  },

  computed: {
    copy(): string {
      return `© ${new Date().getFullYear()} Tartaytantas`
    },

    footerInfoSplit(): string[] {
      return this.content.split(/---/g)
    },

    footerInfoTitle(): string {
      return this.footerInfoSplit[0]
    },

    footerInfo(): string[] {
      return this.footerInfoSplit.slice(1)
    },

    getLogo(): string {
      return require(`@/assets/images/${this.logo}`)
    },
  },
})
</script>

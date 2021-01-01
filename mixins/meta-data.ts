import Vue from 'vue'
import { MetaData } from '@/types'

export default Vue.extend({
  methods: {
    getMetadata(options: MetaData): object {
      return {
        title: options.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: options.description,
          },
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: options.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: options.description,
          },
          // Twitter Card
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: options.title,
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: options.description,
          },
        ],
      }
    },
  },
})

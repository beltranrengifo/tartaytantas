import Vue from 'vue'
import { ProductItem } from '~/types'

const getDomain = () => {
  return process.env.NODE_ENV !== 'production'
    ? 'https://969a-139-47-82-16.eu.ngrok.io'
    : 'https://tartaytantas.es'
}

export default Vue.extend({
  methods: {
    getBasicProductMetadata({
      item,
      image,
    }: {
      item: ProductItem
      image: string
    }) {
      return {
        class: 'snipcart-add-item buy-button',
        'data-item-id': this.getIdFromTitle(item.title),
        'data-item-name': item.title,
        'data-item-url': `${getDomain()}/tartas`,
        'data-item-custom1-name': 'Tamaño',
        'data-item-description': item.description,
        'data-item-image': image,
      }
    },
  },

  computed: {
    getIdFromTitle(): Function {
      return (title: string) => {
        return title
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .toLowerCase()
      }
    },
  },
})

import Vue from 'vue'

export default Vue.extend({
  computed: {
    imageUrl(): Function {
      return (image: string): object | string => {
        try {
          return require(`@/assets/images/${image}`)
        } catch (e) {
          return ''
        }
      }
    },
    imageUrlWebP(): Function {
      return (image: string): object | string => {
        const imageName = image.split('.')[0]
        try {
          return require(`@/assets/images/${imageName}.webp`)
        } catch (e) {
          return ''
        }
      }
    },
  },
})

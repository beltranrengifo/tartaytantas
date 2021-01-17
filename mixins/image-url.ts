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
  },
})

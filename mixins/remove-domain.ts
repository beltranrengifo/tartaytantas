import Vue from 'vue'

export default Vue.extend({
  computed: {
    removeDomain(): Function {
      return (value: string): string => {
        if (!value) {
          return ''
        }
        value = value.toString()
        value = value.replace(/^.*\/\/[^/]+(\/en)?/, '')
        value = value.replace(/\?.+$/, '')
        return value
      }
    },
  },
})

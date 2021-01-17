import Vue from 'vue'

export default (context, inject) => {
  const state = new Vue({
    name: 'State',

    data() {
      return {
        stickyNav: false,
      }
    },

    methods: {
      mutate(property, value) {
        const _this = this
        return new Promise((resolve, reject) => {
          try {
            _this[property] = value
            resolve()
          } catch (e) {
            reject(e)
          }
        })
      },
    },
  })

  inject('state', state)
  // For Nuxt <= 2.12, also add 👇
  context.$state = state
}

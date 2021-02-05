import Vue from 'vue'

export default (context, inject) => {
  const state = new Vue({
    name: 'State',

    data() {
      return {
        showMobileNav: false,
        stickyNav: false,
        isPhone: false,
        isTablet: false,
        isMobileNav: undefined,
        isDesktop: false,
        breakpoints: [
          { size: 'isPhone', breakpoint: '(max-width: 767px)' },
          {
            size: 'isTablet',
            breakpoint: '(min-width: 768px) and (max-width: 1024px)',
          },
          { size: 'isMobileNav', breakpoint: '(max-width: 991px)' },
          { size: 'isDesktop', breakpoint: '(min-width: 1025px)' },
        ],
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

      handleScreenSize() {
        window.addEventListener('resize', this.setScreenSizeValues)
        this.setScreenSizeValues()
      },

      setScreenSizeValues() {
        this.screenWidth = window.innerWidth
        this.breakpoints.forEach((item) => {
          this[item.size] = window.matchMedia(item.breakpoint).matches
        })
      },
    },
  })

  inject('state', state)
  // For Nuxt <= 2.12, also add 👇
  context.$state = state
}

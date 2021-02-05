import Vue from 'vue'

export default Vue.extend({
  methods: {
    handleNuxtLinksInWysiwyg(el: Element): void {
      if (!el || !process.client) {
        return
      }

      const links = el.querySelectorAll('a')
      if (!links.length) return

      Array.from(links).forEach((link: any): void => {
        const target: string = link.getAttribute('target')
        if (target !== '_self') return

        link.addEventListener('click', (e: any) => {
          e.preventDefault()
          this.$router.push(e.target.pathname)
        })
      })
    },
  },
})

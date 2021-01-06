// @ts-nocheck
import Vue from 'vue'
// import { MetaData } from '@/types'

export default Vue.extend({
  data() {
    return {
      winScroll: 0,
    }
  },

  mounted(): void {
    window.addEventListener('scroll', this.handleScroll)
    window.onscroll = () => {
      /* this.winScroll = window.scrollY
      // Reveal effects
      document.querySelectorAll('.reveal').forEach(function (el) {
        if (this.isInViewport(el)) {
          el.classList.add('visible')
        } else {
          el.classList.remove('visible')
        }
      }) */
      // Hero title parallax
      /* if (isInViewport(document.querySelector('.hero-inertia'))) {
        document.querySelector('.hero-inertia').style.transform = `translateY(${
          winScroll * 0.3
        }px)`
      } */
      // Movile devices horizontal transitions
      /* if (isInViewport(document.querySelector('.features'))) {
        mobiles[0].style.transform = `translateX(${
          mobiles[0].getBoundingClientRect().top * 0.2
        }px)`
        mobiles[1].style.transform = `translateX(${
          mobiles[1].getBoundingClientRect().top * 0.07
        }px)`
      } */
      // Message box transitions
      /* if (isInViewport(document.querySelector('.facts'))) {
        messages[0].style.transform = `translate(${
          -messages[0].getBoundingClientRect().top * 0.2
        }px, ${messages[0].getBoundingClientRect().top * 0.1}px)`
        messages[1].style.transform = `translate(${
          messages[1].getBoundingClientRect().top * 0.1
        }px, ${messages[1].getBoundingClientRect().top * 0.05}px)`
        messages[2].style.transform = `translate(${
          messages[2].getBoundingClientRect().top * 0.3
        }px, ${-messages[2].getBoundingClientRect().top * 0.05}px)`
      } */
      // Slider transition
      /* if (isInViewport(document.querySelector('.join'))) {
        sliderTrack.style.transform = `translateX(${
          -document.querySelector('.join').getBoundingClientRect().top * 0.4
        }px)`
      } */
      // Isometric slider transition
      /* if (isInViewport(document.querySelector('.dark-background'))) {
        bgDark.classList.add('on')
      } else {
        bgDark.classList.remove('on')
      } */
    }
  },

  methods: {
    handleScroll(): void {
      this.winScroll = window.scrollY
      // Reveal effects
      document.querySelectorAll('.reveal').forEach((el) => {
        if (this.isInViewport(el)) {
          el.classList.add('visible')
          return
        }
        el.classList.remove('visible')
      })
    },

    isInViewport(el: any) {
      const rect = el.getBoundingClientRect()
      const vertInView =
        rect.top <= window.innerHeight && rect.top + rect.height >= 0
      const horInView =
        rect.left <= window.innerWidth && rect.left + rect.width >= 0
      return vertInView && horInView
    },
  },
})

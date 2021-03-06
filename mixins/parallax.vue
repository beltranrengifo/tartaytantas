<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      winScroll: 0,
      revealClass: '.reveal',
      parallaxClass: '.parallax-item',
    }
  },

  mounted(): void {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll(): void {
      this.winScroll = window.scrollY

      this.handleReveal()
      this.handleInertia()
    },

    handleReveal(): void {
      document?.querySelectorAll(this.revealClass).forEach((el: Element) => {
        this.isInViewport(el)
          ? el.classList.add('visible')
          : el.classList.remove('visible')
      })
    },

    handleInertia(): void {
      document?.querySelectorAll(this.parallaxClass).forEach((el: Element) => {
        if (!this.isInViewport(el)) {
          el.removeAttribute('style')
          return
        }
        const rect = el.getBoundingClientRect()
        ;(el as HTMLElement).style.transform = `translateY(${
          -rect.top * 0.075
        }px)`
      })
    },

    isInViewport(el: Element): boolean {
      const rect = el.getBoundingClientRect()
      const verticalInView: boolean =
        rect.top <= window.innerHeight && rect.top + rect.height >= 0
      const horizontalInView: boolean =
        rect.left <= window.innerWidth && rect.left + rect.width >= 0

      return verticalInView && horizontalInView
    },
  },
})
</script>

<style lang="scss">
.reveal {
  &.zoom-out {
    opacity: 0;
    transition: all 1s ease-out;
    transform: scale(1.05);
  }

  &.fade-in-up {
    opacity: 0;
    transition: $--default-transition;
    transform: translateY(20px);
  }

  &.fade-in-down {
    opacity: 0;
    transition: $--default-transition;
    transform: translateY(-200px);
  }

  &.fade-in-right {
    opacity: 0;
    transition: $--default-transition;
    transform: translateX(20px);
  }

  &.fade-in-left {
    opacity: 0;
    transition: $--default-transition;
    transform: translateX(-20px);
  }

  &.fade-in {
    transition: $--default-transition;
    opacity: 0;
  }

  &.visible {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}

.parallax {
  &__item {
    transition: $--default-transition;
    transform: translateY(0);
  }
}

[data-delay='300ms'] {
  transition-delay: 300ms;
}

[data-delay='600ms'] {
  transition-delay: 600ms;
}
</style>

<template>
  <section class="flex flex-col h-full">
    <Header
      class="main-header"
      :class="{ 'main-header--shrink': $state.stickyNav }"
    />
    <main
      role="main"
      class="main-content flex-auto"
      :class="{ 'main-content--expand': $state.stickyNav }"
    >
      <Nuxt />
    </main>
    <Footer class="flex-shrink-0" :content="footer" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { debounce } from 'lodash'

import Parallax from '@/mixins/parallax.vue'
import HandleShippingCosts from '~/mixins/handle-shipping-costs'
import HandleDeliveryDate from '~/mixins/handle-delivery-date'
import { layout } from '@/content'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const SHOW_MENU_SCROLL_THRESHOLD: number = 50

export default Vue.extend({
  mixins: [Parallax, HandleShippingCosts, HandleDeliveryDate],

  components: {
    Header,
    Footer,
  },

  fetch(): void {
    const { footer } = layout
    this.footer = footer
  },

  data(): any {
    const scrollPosition: Nullable<number> = 0
    return {
      scrollPosition,
      footer: '',
      processedElements: new WeakSet(), // Track processed elements to prevent timing issues
    }
  },

  mounted() {
    window.onscroll = debounce(async () => {
      this.scrollPosition = window.scrollY
      await this.$state.mutate(
        'stickyNav',
        this.scrollPosition > SHOW_MENU_SCROLL_THRESHOLD
      )
    }, 25)

    this.$state.handleScreenSize()
  },

  created() {
    if (!process.client) return

    document.addEventListener(
      'snipcart.ready',
      () => {
        Snipcart.events.on(
          'theme.routechanged',
          (routesChange: { from: string; to: string }) => {
            // Clean up observer when leaving checkout
            if (
              routesChange.from.includes('checkout') &&
              !routesChange.to.includes('checkout')
            ) {
              if (this.$snipcartFormObserver) {
                this.$snipcartFormObserver.disconnect()
                this.$snipcartFormObserver = null
              }
              // Clear processed elements when leaving checkout
              this.processedElements = new WeakSet()
              // Remove document click listener to prevent memory leaks
              document.removeEventListener('click', this.handleDeliveryDate)
            }

            if (routesChange.to.includes('checkout')) {
              document.addEventListener('click', this.handleDeliveryDate)

              // Use MutationObserver to reliably detect when Snipcart forms are rendered
              this.observeForSnipcartForms()
            }
            if (routesChange.to.includes('payment')) {
              const input = document.querySelector(
                '#dia-de-recogida > input.snipcart-input__input'
              ) as HTMLInputElement

              if (input) {
                const validation = this.validateDeliveryDate(input)
                if (
                  !validation.isValid &&
                  validation.shouldReset &&
                  validation.message
                ) {
                  this.handleWeAreClosedAlert({
                    input,
                    message: validation.message,
                  })

                  // Update the minimum date to show valid options
                  this.updateMinimumDeliveryDate(input)
                }
              }
            }
          }
        )

        Snipcart.events.on('shipping.selected', () => {
          this.handleShippingCosts({
            snipcartStore: Snipcart.store,
          })
        })
      },
      { once: true }
    )
  },

  methods: {
    observeForSnipcartForms() {
      // Clean up any existing observer first
      if (this.$snipcartFormObserver) {
        this.$snipcartFormObserver.disconnect()
      }

      // Create a MutationObserver to watch for any Snipcart elements
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element

              // Look for any form elements or Snipcart components that might handle submission
              let elements: Element[] = Array.from(
                element.querySelectorAll?.('form, [class*="snipcart"]') || []
              )

              // Check if the element itself is a form or Snipcart component
              if (element.matches?.('form, [class*="snipcart"]')) {
                elements.push(element)
              }

              // Add event listeners to relevant elements
              elements.forEach((el: Element) => {
                this.addSubmissionListener(el as HTMLElement)
              })
            }
          })
        })
      })

      // Only observe the Snipcart container
      const snipcartContainer = document.getElementById('snipcart')
      if (snipcartContainer) {
        observer.observe(snipcartContainer, {
          childList: true,
          subtree: true,
        })

        // Store observer reference
        this.$snipcartFormObserver = observer

        // Also check for existing elements immediately
        const existingElements = Array.from(
          snipcartContainer.querySelectorAll('form, [class*="snipcart"]')
        )
        existingElements.forEach((el) => {
          this.addSubmissionListener(el as HTMLElement)
        })
      }
    },

    addSubmissionListener(element: HTMLElement) {
      // Use WeakSet for robust duplicate prevention (survives DOM changes)
      if (this.processedElements.has(element)) {
        return
      }

      // Mark as processed immediately to prevent race conditions
      this.processedElements.add(element)

      // Handle both form submission and click events (for Snipcart components)
      const handleValidation = (e: Event) => {
        // Only validate if this seems to be a submission attempt
        const isSubmission =
          e.type === 'submit' ||
          (e.type === 'click' &&
            (element.textContent?.toLowerCase().includes('payment') ||
              element.textContent?.toLowerCase().includes('continuar') ||
              element.getAttribute('label')?.includes('payment')))

        if (!isSubmission) return

        const input = document.querySelector(
          '#dia-de-recogida > input.snipcart-input__input'
        ) as HTMLInputElement

        // SAFETY: Only validate if we actually have a delivery date input with a value
        // This ensures we never interfere with:
        // - Pickup-only orders
        // - Orders without delivery dates
        // - Non-delivery product purchases
        if (!input || !input.value || !input.value.trim()) {
          return // No delivery date = no validation needed
        }

        const validation = this.validateDeliveryDate(input)
        if (
          !validation.isValid &&
          validation.shouldReset &&
          validation.message
        ) {
          // Block payment and show clear explanation
          e.preventDefault()
          e.stopPropagation()

          this.handleWeAreClosedAlert({
            input,
            message: validation.message,
          })

          // Update the minimum date and reset invalid date
          this.updateMinimumDeliveryDate(input)
        }
      }

      // Add both form submit and click listeners
      element.addEventListener('submit', handleValidation)
      element.addEventListener('click', handleValidation)
    },
  },

  beforeDestroy() {
    // Clean up MutationObserver if it exists
    if (this.$snipcartFormObserver) {
      this.$snipcartFormObserver.disconnect()
      this.$snipcartFormObserver = null
    }
  },

  head() {
    const openGraphImage = require('@/assets/images/nosotros.jpg')
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.baseUrl + openGraphImage,
        },
        {
          name: 'facebook-domain-verification',
          content: '4ufv34jltv1cuzb0vd6lii1vrpg20m',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.main-header {
  transition: $--header-t;
  height: $--header-h;
  &--shrink {
    height: $--header-h-shrink;
    @include breakpoint(sm) {
      background-color: var(--color-tertiary);
    }
  }
}
</style>

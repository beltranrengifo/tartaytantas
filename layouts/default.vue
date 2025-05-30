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
            if (routesChange.to.includes('checkout')) {
              document.addEventListener('click', this.handleDeliveryDate)

              // Add form submission listener as additional safety net
              setTimeout(() => {
                const checkoutForms = document.querySelectorAll(
                  '#snipcart form, form[class*="snipcart"]'
                )
                checkoutForms.forEach((form) => {
                  // Prevent duplicate listeners
                  if (!form.hasAttribute('data-delivery-date-listener-added')) {
                    form.addEventListener('submit', (e) => {
                      const input = document.querySelector(
                        '#dia-de-recogida > input.snipcart-input__input'
                      ) as HTMLInputElement
                      if (input && input.value) {
                        const currentDate = new Date()
                        const newMinDate = this.getMinDateForDelivery({
                          currentDay: currentDate.getDay(),
                          currentHour: currentDate.getHours(),
                        })

                        // Convert to Date objects for reliable comparison
                        const selectedDate = new Date(input.value)
                        const minDate = new Date(newMinDate)

                        if (selectedDate < minDate) {
                          // Block form submission
                          e.preventDefault()
                          e.stopPropagation()

                          this.handleWeAreClosedAlert({
                            input,
                            message: `¡Ups! 😅 La fecha seleccionada (${this.formatDateForUser(
                              input.value
                            )}) no nos deja tiempo suficiente para preparar tu pedido. Necesitamos al menos 48 horas para poder entregarte algo perfecto 🎂<br><br>Por favor, elige una nueva fecha.`,
                          })

                          input.setAttribute('min', newMinDate)
                          input.value = ''
                          input.dispatchEvent(new Event('input'))

                          return false
                        }
                      }
                    })
                    form.setAttribute(
                      'data-delivery-date-listener-added',
                      'true'
                    )
                  }
                })
              }, 1000) // Delay to ensure Snipcart forms are rendered
            }
            if (routesChange.to.includes('payment')) {
              const input = document.querySelector(
                '#dia-de-recogida > input.snipcart-input__input'
              ) as HTMLInputElement
              if (input && input.value) {
                const currentDate = new Date()
                const currentDay = currentDate.getDay()
                const currentHour = currentDate.getHours()
                const newMinDate = this.getMinDateForDelivery({
                  currentDay,
                  currentHour,
                })

                // Convert to Date objects for reliable comparison
                const selectedDate = new Date(input.value)
                const minDate = new Date(newMinDate)

                // Check if selected date is no longer valid (less than 48h from now)
                if (selectedDate < minDate) {
                  // Block payment and show clear explanation
                  this.handleWeAreClosedAlert({
                    input,
                    message: `La fecha seleccionada (${this.formatDateForUser(
                      input.value
                    )}) no nos deja tiempo para preparar tu pedido correctamente. Necesitamos al menos 48 horas ⏰<br><br>Selecciona una nueva fecha`,
                  })

                  // Update the minimum date to show valid options
                  input.setAttribute('min', newMinDate)

                  // Clear the invalid date so user must choose a new one
                  input.value = ''
                  input.dispatchEvent(new Event('input'))
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
    formatDateForUser(dateString: string): string {
      if (!dateString) return ''
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      } catch {
        return dateString
      }
    },
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

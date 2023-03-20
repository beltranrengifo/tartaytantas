import Vue from 'vue'
import { vacations } from '~/config'

export default Vue.extend({
  methods: {
    addDays(days: number): Date {
      const result = new Date()
      result.setDate(result.getDate() + days)
      return result
    },

    getMinDateForDelivery({
      currentDay,
      currentHour,
    }: {
      currentDay: number
      currentHour: number
    }) {
      let MIN_DAYS_FOR_DELIVERY = 2

      if (currentDay === 5) {
        // Fridays
        MIN_DAYS_FOR_DELIVERY = currentHour < 15 ? 3 : 4
      } else if (currentDay === 6) {
        // Saturdays
        MIN_DAYS_FOR_DELIVERY = 3
      }

      return this.addDays(MIN_DAYS_FOR_DELIVERY).toISOString().split('T')[0]
    },

    handlePickUpOption({
      selectorId,
      enable,
    }: {
      selectorId: string
      enable?: boolean
    }) {
      const select: HTMLElement | HTMLSelectElement | null =
        document.getElementById('tramo-de-entrega')
      // @ts-expect-error
      select?.value = ''
      select?.dispatchEvent(new Event('input'))

      const option = document.getElementById(selectorId)

      if (enable) {
        option?.removeAttribute('disabled')
        return
      }

      option?.setAttribute('disabled', 'true')
    },

    handleWeAreClosedAlert({
      input,
      hide = false,
      message,
    }: {
      input: Element
      hide?: boolean
      message: string
    }) {
      if (hide) {
        const alertToRemove = document.querySelector('.tt-snipcart-alert')
        alertToRemove && alertToRemove.remove()
        return
      }

      const existingAlert = document.getElementById('tt-shop-closed-alert')

      if (existingAlert) {
        existingAlert.remove()
      }

      const wrapper = input.closest('.snipcart-form__field')

      const alert = document.createElement('div')

      alert.classList.add('tt-snipcart-alert')
      alert.setAttribute('id', 'tt-shop-closed-alert')
      alert.innerHTML = message
      wrapper?.after(alert)
    },

    resetDate(input: HTMLInputElement) {
      input.value = ''
      input.valueAsDate = null
      input.dispatchEvent(new Event('input'))
    },

    handleDeliveryDate() {
      const input = <HTMLInputElement>(
        document.querySelector('#dia-de-recogida > input.snipcart-input__input')
      )

      if (!input) return

      const currentDate = new Date()
      const currentDay = currentDate.getDay()
      const currentHour = currentDate.getHours()

      input.setAttribute(
        'min',
        this.getMinDateForDelivery({ currentDay, currentHour })
      )

      input.addEventListener('change', (event) => {
        let selectedDayStringValue = (event.target as HTMLInputElement)?.value
        const selectedDay = new Date(selectedDayStringValue).getDay()

        if (!isNaN(selectedDay) && selectedDay !== 0) {
          this.handleWeAreClosedAlert({
            input,
            hide: true,
            message:
              'No tenemos disponible la entrega para los domingos, por favor selecciona otro día. Disculpa las molestias.',
          })
        }

        if (!isNaN(selectedDay)) {
          this.handlePickUpOption({
            selectorId: 'tramo-de-entrega-tarde',
            enable: true,
          })
          this.handlePickUpOption({
            selectorId: 'tramo-de-entrega-manana',
            enable: true,
          })
        }

        if (vacations.includes(selectedDayStringValue)) {
          const vacationDateIndex = vacations.findIndex(
            (date) => date === selectedDayStringValue
          )
          const vacationsDayDate = new Date(vacations[vacationDateIndex])
          const currentDayDate = new Date(selectedDayStringValue)
          /* double check in case the datepicker format eventually changes */
          if (vacationsDayDate.toString() === currentDayDate.toString()) {
            this.resetDate(input)

            this.handlePickUpOption({ selectorId: 'tramo-de-entrega-manana' })
            this.handlePickUpOption({ selectorId: 'tramo-de-entrega-tarde' })

            this.handleWeAreClosedAlert({
              input,
              message:
                'Vaya, el día que has seleccionado estamos de vacaciones 💃🏻, por favor elige otra fecha y disculpa las molestias.',
            })
          }
        } else if (selectedDay === 6) {
          this.handlePickUpOption({ selectorId: 'tramo-de-entrega-tarde' })
        } else if (selectedDay === 0) {
          this.resetDate(input)

          this.handlePickUpOption({ selectorId: 'tramo-de-entrega-manana' })
          this.handlePickUpOption({ selectorId: 'tramo-de-entrega-tarde' })

          this.handleWeAreClosedAlert({
            input,
            message:
              'No tenemos disponible la entrega para los domingos, por favor selecciona otro día. Disculpa las molestias.',
          })
        }
      })
    },
  },
})

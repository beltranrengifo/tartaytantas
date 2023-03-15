import Vue from 'vue'

export default Vue.extend({
  methods: {
    addDays(days: number): Date {
      const result = new Date()
      result.setDate(result.getDate() + days)
      return result
    },

    getMinDate({
      currentDay,
      currentHour,
    }: {
      currentDay: number
      currentHour: number
    }) {
      let sumDays = 2

      if (currentDay === 5) {
        sumDays = currentHour < 15 ? 3 : 4
      } else if (currentDay === 6) {
        sumDays = 3
      }

      return this.addDays(sumDays).toISOString().split('T')[0]
    },

    disablePickUpOption({
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

    showWeAreClosedAlert({
      input,
      hide = false,
    }: {
      input: Element
      hide?: boolean
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
      alert.innerHTML = `
        No tenemos disponible la entrega para los domingos, por favor selecciona otro día. Disculpa las molestias.
      `
      wrapper?.after(alert)
    },

    handleDeliveryDate() {
      const input = <HTMLInputElement>(
        document.querySelector('#dia-de-recogida > input.snipcart-input__input')
      )

      if (!input) return

      const currentDate = new Date()
      const currentDay = currentDate.getDay()
      const currentHour = currentDate.getHours()

      input.setAttribute('min', this.getMinDate({ currentDay, currentHour }))

      input.addEventListener('change', (event) => {
        let selectedDayStringValue = (event.target as HTMLInputElement)?.value
        const selectedDay = new Date(selectedDayStringValue).getDay()

        if (!isNaN(selectedDay) && selectedDay !== 0) {
          this.showWeAreClosedAlert({ input, hide: true })
        }

        if (!isNaN(selectedDay)) {
          this.disablePickUpOption({
            selectorId: 'tramo-de-entrega-tarde',
            enable: true,
          })
          this.disablePickUpOption({
            selectorId: 'tramo-de-entrega-manana',
            enable: true,
          })
        }

        if (selectedDay === 6) {
          this.disablePickUpOption({ selectorId: 'tramo-de-entrega-tarde' })
        } else if (selectedDay === 0) {
          input.value = ''
          input.valueAsDate = null
          input.dispatchEvent(new Event('input'))
          this.disablePickUpOption({ selectorId: 'tramo-de-entrega-manana' })
          this.disablePickUpOption({ selectorId: 'tramo-de-entrega-tarde' })
          this.showWeAreClosedAlert({ input })
        }
      })
    },
  },
})

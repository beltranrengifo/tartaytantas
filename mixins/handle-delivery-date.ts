import Vue from 'vue'
import { vacations, morningOnlyDates } from '~/config'

export default Vue.extend({
  data() {
    return {
      // Store references to event handlers for proper cleanup
      deliveryDateInput: null as HTMLInputElement | null,
      focusHandler: null as (() => void) | null,
      changeHandler: null as ((event: Event) => void) | null,
    }
  },

  beforeDestroy() {
    this.cleanupDeliveryDateListeners()
  },

  methods: {
    /**
     * Removes event listeners from delivery date input to prevent memory leaks
     *
     * Called automatically in beforeDestroy lifecycle hook and can be called
     * manually when switching between different date inputs.
     *
     * @example
     * // Manual cleanup when switching contexts
     * this.cleanupDeliveryDateListeners()
     */
    cleanupDeliveryDateListeners() {
      if (this.deliveryDateInput && this.focusHandler) {
        this.deliveryDateInput.removeEventListener('focus', this.focusHandler)
        this.deliveryDateInput.removeAttribute('data-focus-listener-added')
      }

      if (this.deliveryDateInput && this.changeHandler) {
        this.deliveryDateInput.removeEventListener('change', this.changeHandler)
        this.deliveryDateInput.removeAttribute('data-change-listener-added')
      }

      // Reset references
      this.deliveryDateInput = null
      this.focusHandler = null
      this.changeHandler = null
    },

    /**
     * Creates a deterministic Date object from YYYY-MM-DD string using component parsing
     *
     * Avoids browser/timezone inconsistencies by manually parsing date components
     * and creating the Date object in local timezone at midnight.
     *
     * @param {string} dateString - Date in YYYY-MM-DD format
     * @returns {Date|null} Date object in local timezone or null if invalid
     *
     * @example
     * this.parseDateFromString('2024-01-25') // Always January 25, 2024 at 00:00:00 local time
     */
    parseDateFromString(dateString: string): Date | null {
      if (!dateString || typeof dateString !== 'string') {
        return null
      }

      // Match YYYY-MM-DD format
      const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/)
      if (!match) {
        return null
      }

      const [, yearStr, monthStr, dayStr] = match
      const year = parseInt(yearStr, 10)
      const month = parseInt(monthStr, 10) - 1 // Month is 0-indexed
      const day = parseInt(dayStr, 10)

      // Validate components
      if (
        year < 1000 ||
        year > 9999 ||
        month < 0 ||
        month > 11 ||
        day < 1 ||
        day > 31
      ) {
        return null
      }

      // Create date in local timezone at midnight
      const date = new Date(year, month, day, 0, 0, 0, 0)

      // Verify the date components match (handles invalid dates like Feb 30)
      if (
        date.getFullYear() !== year ||
        date.getMonth() !== month ||
        date.getDate() !== day
      ) {
        return null
      }

      return date
    },

    /**
     * Gets the day of week (0-6) from a YYYY-MM-DD date string deterministically
     *
     * @param {string} dateString - Date in YYYY-MM-DD format
     * @returns {number} Day of week (0=Sunday, 1=Monday, ..., 6=Saturday) or NaN if invalid
     */
    getDayOfWeekFromString(dateString: string): number {
      const date = this.parseDateFromString(dateString)
      return date ? date.getDay() : NaN
    },

    addDays(days: number): Date {
      const result = new Date()
      result.setDate(result.getDate() + days)
      return result
    },

    /**
     * Calculates the minimum allowed delivery date based on current day and time
     *
     * Core business logic implementing the 48-hour minimum delivery policy
     * with special handling for weekends to account for bakery operating schedule.
     *
     * Business Rules:
     * - Monday-Thursday: 2 days minimum (48 hours)
     * - Friday before 3 PM: 3 days minimum (accounts for weekend)
     * - Friday after 3 PM: 4 days minimum (next Monday delivery)
     * - Saturday: 3 days minimum (Tuesday delivery, skips Sunday closure)
     * - Sunday: Not handled here (blocked in handleDeliveryDate)
     *
     * @param {Object} params - Date calculation parameters
     * @param {number} params.currentDay - Day of week (0=Sunday, 1=Monday, ..., 6=Saturday)
     * @param {number} params.currentHour - Hour of day (0-23, 24-hour format)
     *
     * @returns {string} ISO date string (YYYY-MM-DD) for minimum delivery date
     *
     * @example
     * // Tuesday at 2 PM → Thursday delivery (2 days)
     * getMinDateForDelivery({ currentDay: 2, currentHour: 14 })
     * // Returns: "2024-01-25" (if today is 2024-01-23)
     *
     * // Friday at 2 PM → Monday delivery (3 days)
     * getMinDateForDelivery({ currentDay: 5, currentHour: 14 })
     * // Returns: "2024-01-29" (if today is 2024-01-26)
     *
     * // Friday at 4 PM → Tuesday delivery (4 days, past cutoff)
     * getMinDateForDelivery({ currentDay: 5, currentHour: 16 })
     * // Returns: "2024-01-30" (if today is 2024-01-26)
     *
     * @see handleDeliveryDate - For Sunday blocking and vacation handling
     */
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

    /**
     * Manages pickup time slot availability based on selected delivery day
     *
     * Controls whether morning (10-14h) and afternoon (16-19h) pickup slots are enabled
     * or disabled based on business rules and selected delivery day.
     *
     * Business Rules:
     * - Saturday: Only morning slots available (afternoon disabled)
     * - Sunday: Both slots disabled (no Sunday deliveries)
     * - Other days: Both slots available
     *
     * @param {Object} params - Time slot configuration
     * @param {string} params.selectorId - ID of the time slot option to modify
     * @param {boolean} [params.enable] - Whether to enable (true) or disable (false/undefined)
     *
     * @example
     * // Disable afternoon pickup for Saturday
     * this.handlePickUpOption({
     *   selectorId: 'tramo-de-entrega-tarde',
     *   enable: false
     * })
     *
     * // Enable morning pickup
     * this.handlePickUpOption({
     *   selectorId: 'tramo-de-entrega-manana',
     *   enable: true
     * })
     *
     * @side-effects
     * - Resets time slot dropdown to empty value
     * - Adds/removes 'disabled' attribute on option elements
     * - Dispatches 'input' event on dropdown for reactivity
     */
    handlePickUpOption({
      selectorId,
      enable,
    }: {
      selectorId: string
      enable?: boolean
    }) {
      const select = document.getElementById('tramo-de-entrega')

      if (select && select instanceof HTMLSelectElement) {
        select.value = ''
        select.dispatchEvent(new Event('input'))
      }

      const option = document.getElementById(selectorId)

      if (enable) {
        option?.removeAttribute('disabled')
        return
      }

      option?.setAttribute('disabled', 'true')
    },

    /**
     * Manages display and removal of delivery date validation alerts
     *
     * Handles user-facing alerts for delivery date restrictions (vacations, Sundays, 48-hour rule).
     * Can both show new alerts and hide existing ones, with proper DOM cleanup.
     *
     * @param {Object} params - Alert configuration
     * @param {Element} params.input - The date input element to attach alert near
     * @param {boolean} [params.hide=false] - Whether to hide existing alert instead of showing
     * @param {string} params.message - HTML message to display (supports emojis and formatting)
     *
     * @example
     * // Show vacation alert
     * this.handleWeAreClosedAlert({
     *   input: dateInput,
     *   message: 'Estamos de vacaciones 💃🏻, elige otra fecha'
     * })
     *
     * // Hide any existing alert
     * this.handleWeAreClosedAlert({
     *   input: dateInput,
     *   hide: true,
     *   message: '' // Required but ignored when hiding
     * })
     *
     * @side-effects
     * - Creates/removes DOM elements with class 'tt-snipcart-alert'
     * - Positions alert after the input's parent field wrapper
     * - Replaces any existing alert with same ID
     */
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

    /**
     * Validates if a delivery date meets the 48-hour minimum requirement
     *
     * Pure validation function that checks if the selected delivery date is valid
     * according to business rules without any side effects. Returns detailed
     * validation results including user-friendly error messages.
     *
     * @param {HTMLInputElement} input - The date input element to validate
     *
     * @returns {Object} Validation result object
     * @returns {boolean} returns.isValid - Whether the selected date is valid
     * @returns {boolean} returns.shouldReset - Whether the invalid date should be cleared
     * @returns {string} [returns.message] - User-friendly error message in Spanish (if invalid)
     *
     * @example
     * const validation = this.validateDeliveryDate(dateInput)
     * if (!validation.isValid) {
     *   showAlert(validation.message)
     *   if (validation.shouldReset) {
     *     resetInput()
     *   }
     * }
     *
     * @since 1.0.0 Added to prevent Friday→Saturday 48-hour bypass vulnerability
     */
    validateDeliveryDate(
      input: HTMLInputElement
    ): { isValid: boolean; shouldReset: boolean; message?: string } {
      if (!input || !input.value || !input.value.trim()) {
        return { isValid: true, shouldReset: false }
      }

      const currentDate = new Date()
      const currentDay = currentDate.getDay()
      const currentHour = currentDate.getHours()
      const newMinDate = this.getMinDateForDelivery({ currentDay, currentHour })

      try {
        // Use deterministic date parsing to avoid timezone issues
        const selectedDateObj = this.parseDateFromString(input.value)
        const minDateObj = this.parseDateFromString(newMinDate)

        // Check for invalid dates
        if (!selectedDateObj || !minDateObj) {
          console.warn('Invalid date detected in delivery date validation')
          return { isValid: true, shouldReset: false } // Don't interfere if dates are invalid
        }

        if (selectedDateObj < minDateObj) {
          return {
            isValid: false,
            shouldReset: true,
            message: `¡Ups! 😅 La fecha seleccionada (${this.formatDateForUser(
              input.value
            )}) no nos deja tiempo suficiente para preparar tu pedido. Necesitamos al menos 48 horas para poder entregarte algo perfecto 🎂<br><br>Por favor, elige una nueva fecha.`,
          }
        }

        return { isValid: true, shouldReset: false }
      } catch (error) {
        console.warn('Error in delivery date validation:', error)
        return { isValid: true, shouldReset: false } // Don't interfere on error
      }
    },

    formatDateForUser(dateString: string): string {
      if (!dateString) return ''
      try {
        const date = this.parseDateFromString(dateString)
        if (!date) return dateString

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

    /**
     * Updates the minimum delivery date for a date input and resets invalid selections
     *
     * This method dynamically calculates the minimum allowed delivery date based on the current
     * time and business rules (48-hour minimum, Friday/Saturday special handling), then:
     * 1. Updates the HTML input's `min` attribute to prevent invalid date selection
     * 2. Validates the currently selected date against the new minimum
     * 3. Automatically resets the date if it's no longer valid
     *
     * Business Rules Applied:
     * - Regular days: 2 days minimum (48 hours)
     * - Fridays before 3 PM: 3 days minimum
     * - Fridays after 3 PM: 4 days minimum
     * - Saturdays: 3 days minimum
     *
     * @param {HTMLInputElement} input - The date input element to update and validate
     *
     * @example
     * // Called when user focuses on date input to prevent 48-hour bypass
     * input.addEventListener('focus', () => {
     *   this.updateMinimumDeliveryDate(input)
     * })
     *
     * @side-effects
     * - Modifies input's `min` attribute
     * - May reset input's value if currently selected date is invalid
     * - Dispatches 'input' event if date is reset
     */
    updateMinimumDeliveryDate(input: HTMLInputElement) {
      const currentDate = new Date()
      const currentDay = currentDate.getDay()
      const currentHour = currentDate.getHours()

      const newMinDate = this.getMinDateForDelivery({ currentDay, currentHour })
      input.setAttribute('min', newMinDate)

      // Use the shared validation logic
      const validation = this.validateDeliveryDate(input)
      if (!validation.isValid && validation.shouldReset) {
        this.resetDate(input)
      }
    },

    /**
     * Main orchestrator for delivery date input initialization and business rule enforcement
     *
     * Complex method that sets up the delivery date input with comprehensive business logic:
     * 1. Initializes 48-hour minimum date validation
     * 2. Prevents bypass via focus event listener
     * 3. Enforces all business rules via change event listener
     * 4. Manages pickup time slot availability based on selected day
     *
     * Business Rules Enforced:
     * - 48-hour minimum delivery time (via updateMinimumDeliveryDate)
     * - Sunday delivery blocking (no deliveries on Sundays)
     * - Vacation date blocking (from ~/config/vacations)
     * - Saturday afternoon pickup restriction (only morning slots)
     * - Pickup time slot management (morning/afternoon availability)
     *
     * Event Listeners Added:
     * - 'focus': Updates minimum date to prevent Friday→Saturday bypass vulnerability
     * - 'change': Validates selection and manages time slots/alerts
     *
     * Memory Management:
     * - Stores handler references for proper cleanup in beforeDestroy
     * - Uses data attributes to ensure event listeners are only added once per input
     * - Automatically cleans up previous listeners when switching inputs
     *
     * @example
     * // Called when entering Snipcart checkout
     * document.addEventListener('click', this.handleDeliveryDate)
     *
     * @side-effects
     * - Adds event listeners to delivery date input
     * - Sets data attributes for duplicate prevention
     * - May show/hide alerts based on date selection
     * - Enables/disables pickup time slot options
     * - May reset date input if invalid selection
     * - Stores references in component data for cleanup
     *
     * @see updateMinimumDeliveryDate - For 48-hour enforcement
     * @see handleWeAreClosedAlert - For user messaging
     * @see handlePickUpOption - For time slot management
     * @see cleanupDeliveryDateListeners - For memory management
     * @see ~/config/vacations - For vacation date list
     */
    handleDeliveryDate() {
      const input = <HTMLInputElement>(
        document.querySelector('#dia-de-recogida > input.snipcart-input__input')
      )

      if (!input) {
        return
      }

      // Clean up previous listeners if we're switching to a different input
      if (this.deliveryDateInput && this.deliveryDateInput !== input) {
        this.cleanupDeliveryDateListeners()
      }

      // Store reference for cleanup
      this.deliveryDateInput = input

      // Set initial minimum date
      this.updateMinimumDeliveryDate(input)

      // Update minimum date whenever the input gets focus to prevent bypassing the 48h rule
      // Only add the listener if it hasn't been added before
      if (!input.hasAttribute('data-focus-listener-added')) {
        this.focusHandler = () => {
          this.updateMinimumDeliveryDate(input)
        }

        input.addEventListener('focus', this.focusHandler)
        input.setAttribute('data-focus-listener-added', 'true')
      }

      // Helper to create proper event for programmatic triggers
      const createChangeEvent = (target: HTMLInputElement): Event => {
        const event = new Event('change')
        Object.defineProperty(event, 'target', { value: target })
        return event
      }

      // Only add change listener if it hasn't been added before
      if (!input.hasAttribute('data-change-listener-added')) {
        this.changeHandler = (event: Event) => {
          let selectedDayStringValue = (event.target as HTMLInputElement)?.value
          const selectedDay = this.getDayOfWeekFromString(
            selectedDayStringValue
          )

          if (!isNaN(selectedDay) && selectedDay !== 0) {
            this.handleWeAreClosedAlert({
              input,
              hide: true,
              message:
                'No tenemos disponible la entrega para los domingos, por favor selecciona otro día. Disculpa las molestias.',
            })
          }

          if (!isNaN(selectedDay)) {
            // Always enable morning slot for valid days
            this.handlePickUpOption({
              selectorId: 'tramo-de-entrega-manana',
              enable: true,
            })

            // Enable afternoon slot unless it's a morning-only date or Saturday
            const isMorningOnlyDate = morningOnlyDates.includes(
              selectedDayStringValue
            )
            const isSaturday = selectedDay === 6
            const isAfternoonDisabled = isMorningOnlyDate || isSaturday

            this.handlePickUpOption({
              selectorId: 'tramo-de-entrega-tarde',
              enable: !isAfternoonDisabled,
            })

            // Show message for morning-only periods
            if (morningOnlyDates.includes(selectedDayStringValue)) {
              this.handleWeAreClosedAlert({
                input,
                message:
                  '☀️ Durante este período solo tenemos disponible el horario de mañana (10-14h). ¡Gracias por tu comprensión!',
              })
            }
          }

          if (vacations.includes(selectedDayStringValue)) {
            const vacationDateIndex = vacations.findIndex(
              (date) => date === selectedDayStringValue
            )
            const vacationDate = this.parseDateFromString(
              vacations[vacationDateIndex]
            )
            const selectedDate = this.parseDateFromString(
              selectedDayStringValue
            )

            /* double check in case the datepicker format eventually changes */
            if (
              vacationDate &&
              selectedDate &&
              vacationDate.getTime() === selectedDate.getTime()
            ) {
              this.resetDate(input)

              this.handlePickUpOption({ selectorId: 'tramo-de-entrega-manana' })
              this.handlePickUpOption({ selectorId: 'tramo-de-entrega-tarde' })

              this.handleWeAreClosedAlert({
                input,
                message:
                  'Vaya, el día que has seleccionado estamos de vacaciones 💃🏻, por favor elige otra fecha y disculpa las molestias.',
              })
            }
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
        }

        // Add multiple event listeners to catch all possible date changes
        const eventTypes = ['change', 'input', 'blur', 'keyup', 'click']
        eventTypes.forEach((eventType) => {
          if (this.changeHandler) {
            input.addEventListener(eventType, this.changeHandler)
          }
        })

        // Also add a MutationObserver to catch programmatic changes
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === 'attributes' &&
              mutation.attributeName === 'value'
            ) {
              if (this.changeHandler) {
                this.changeHandler(createChangeEvent(input))
              }
            }
          })
        })
        observer.observe(input, {
          attributes: true,
          attributeFilter: ['value'],
        })

        // Also check for changes periodically
        const checkForChanges = () => {
          const currentValue = input.value
          if (currentValue && currentValue !== (input as any).lastKnownValue) {
            ;(input as any).lastKnownValue = currentValue
            if (this.changeHandler) {
              this.changeHandler(createChangeEvent(input))
            }
          }
        }

        const intervalId = setInterval(checkForChanges, 1000)
        // Store interval ID for cleanup
        ;(input as any).intervalId = intervalId

        input.setAttribute('data-change-listener-added', 'true')

        // Check if the input already has a value when we set up listeners
        if (input.value && this.changeHandler) {
          this.changeHandler(createChangeEvent(input))
        }

        // Also check after a delay to catch Snipcart's initial value setting
        setTimeout(() => {
          if (input.value && this.changeHandler) {
            this.changeHandler(createChangeEvent(input))
          }
        }, 500)

        // And another check after an even longer delay
        setTimeout(() => {
          if (input.value && this.changeHandler) {
            this.changeHandler(createChangeEvent(input))
          }
        }, 2000)
      }

      // Set up a global listener to watch for Snipcart events
      const handleSnipcartEvent = () => {
        // Re-run our logic after Snipcart updates
        setTimeout(() => {
          if (input && input.value && this.changeHandler) {
            this.changeHandler(createChangeEvent(input))
          }
        }, 100)
      }

      // Listen for various Snipcart events that might update the form
      document.addEventListener('change', handleSnipcartEvent)
      document.addEventListener('input', handleSnipcartEvent)
    },
  },
})

<template>
  <transition name="modal-fade">
    <div
      v-if="isVisible"
      class="base-modal"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="ariaLabelledby"
      @click.self="handleBackdropClick"
      @keydown.esc="close"
    >
      <div class="base-modal__content" ref="modalContent">
        <button
          class="base-modal__close"
          @click="close"
          aria-label="Cerrar"
          type="button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import { handleBodyScroll } from '@/plugins/body-scroll'

const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000

export default Vue.extend({
  name: 'BaseModal',

  props: {
    storageKey: {
      type: String,
      required: true,
    },
    expiryMs: {
      type: Number,
      default: TWELVE_HOURS_MS,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
    ariaLabelledby: {
      type: String,
      default: 'modal-title',
    },
  },

  data() {
    return {
      isVisible: false,
    }
  },

  mounted() {
    this.checkAndShowModal()
  },

  beforeDestroy() {
    if (this.isVisible) {
      handleBodyScroll({
        shouldLockScroll: false,
        shouldClear: true,
        ref: this.$refs.modalContent as HTMLElement,
      })
    }
  },

  methods: {
    checkAndShowModal() {
      if (!process.client) return

      // Skip localStorage check in dev mode - always show modal
      if (process.env.NODE_ENV !== 'production') {
        this.show()
        return
      }

      const stored = localStorage.getItem(this.storageKey)

      if (stored) {
        const { dismissedAt } = JSON.parse(stored)
        const now = Date.now()

        // Reset visibility after expiry time (12 hours by default)
        if (now - dismissedAt < this.expiryMs) {
          return
        }
      }

      this.show()
    },

    show() {
      this.isVisible = true
      this.$nextTick(() => {
        handleBodyScroll({
          shouldLockScroll: true,
          shouldClear: false,
          ref: this.$refs.modalContent as HTMLElement,
        })

        const focusable = (this.$refs.modalContent as HTMLElement)?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement
        focusable?.focus()
      })
      this.$emit('open')
    },

    close() {
      this.isVisible = false

      handleBodyScroll({
        shouldLockScroll: false,
        shouldClear: true,
        ref: this.$refs.modalContent as HTMLElement,
      })

      if (process.client) {
        localStorage.setItem(
          this.storageKey,
          JSON.stringify({ dismissedAt: Date.now() })
        )
      }

      this.$emit('close')
    },

    handleBackdropClick() {
      if (this.closeOnBackdrop) {
        this.close()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;

  &__content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

    @include breakpoint(sm) {
      max-width: 500px;
    }
  }

  &__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    font-size: 1.75rem;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-dark);
    transition: background-color 0.2s, transform 0.2s;
    z-index: 10;

    &:hover {
      background: white;
      transform: scale(1.1);
    }

    &:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .base-modal__content,
.modal-fade-leave-active .base-modal__content {
  transition: transform 0.3s ease;
}

.modal-fade-enter .base-modal__content,
.modal-fade-leave-to .base-modal__content {
  transform: scale(0.95);
}
</style>

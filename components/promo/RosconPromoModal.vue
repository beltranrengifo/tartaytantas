<template>
  <BaseModal
    storage-key="roscon-promo-dismissed"
    :expiry-ms="expiryMs"
    aria-labelledby="roscon-promo-title"
  >
    <article class="roscon-promo">
      <figure class="roscon-promo__image">
        <img
          :src="require('@/assets/images/roscon/roscon-tartaytantas.webp')"
          alt="Roscón de Reyes artesanal de Tartaytantas con frutas confitadas y decoración navideña"
          class="roscon-promo__bg"
        />
      </figure>

      <div class="roscon-promo__overlay" aria-hidden="true"></div>

      <div class="roscon-promo__content">
        <header class="roscon-promo__header">
          <p class="roscon-promo__subtitle">Ya puedes encargar tu</p>
          <h2 id="roscon-promo-title" class="roscon-promo__title">
            Roscón de Reyes
          </h2>
        </header>

        <div class="roscon-promo__products">
          <div class="roscon-promo__product">
            <h3 class="roscon-promo__product-title">Roscón de Reyes</h3>
            <p class="roscon-promo__product-price">Medio kilo 24€ / 1 kilo 48€</p>
            <button
              class="snipcart-add-item buy-button"
              :data-item-id="'roscon-reyes'"
              :data-item-name="'Roscón de Reyes'"
              :data-item-url="productUrl"
              :data-item-price="24"
              data-item-custom1-name="Tamaño"
              data-item-custom1-options="Medio kilo (24€)|1 kilo (48€)[+24]"
              :data-item-description="'Roscón de Reyes artesanal'"
              :data-item-image="rosconImage"
            >
              <span class="buy-button__inner">
                <img
                  :src="require('@/assets/images/shopping-basket.svg')"
                  alt=""
                  class="buy-button__image"
                  aria-hidden="true"
                />
                Añadir
              </span>
            </button>
          </div>

          <div class="roscon-promo__product">
            <h3 class="roscon-promo__product-title">Roscón relleno de nata</h3>
            <p class="roscon-promo__product-price">Medio kilo 24€ / 1 kilo 48€</p>
            <button
              class="snipcart-add-item buy-button"
              :data-item-id="'roscon-reyes-nata'"
              :data-item-name="'Roscón de Reyes relleno de nata'"
              :data-item-url="productUrl"
              :data-item-price="24"
              data-item-custom1-name="Tamaño"
              data-item-custom1-options="Medio kilo (24€)|1 kilo (48€)[+24]"
              :data-item-description="'Roscón de Reyes artesanal relleno de nata'"
              :data-item-image="rosconImage"
            >
              <span class="buy-button__inner">
                <img
                  :src="require('@/assets/images/shopping-basket.svg')"
                  alt=""
                  class="buy-button__image"
                  aria-hidden="true"
                />
                Añadir
              </span>
            </button>
          </div>
        </div>

        <footer class="roscon-promo__footer">
          <p class="roscon-promo__contact">
            También puedes escribirnos por
            <a
              href="https://wa.me/34663398161"
              target="_blank"
              rel="noopener noreferrer"
              class="roscon-promo__link"
            >
              WhatsApp al 663 398 161
            </a>
            o por email a
            <a href="mailto:info@tartaytantas.es" class="roscon-promo__link">
              info@tartaytantas.es
            </a>
          </p>
        </footer>
      </div>
    </article>
  </BaseModal>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseModal from '@/components/ui/BaseModal.vue'

const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000

export default Vue.extend({
  name: 'RosconPromoModal',

  components: {
    BaseModal,
  },

  data() {
    return {
      expiryMs: TWELVE_HOURS_MS,
    }
  },

  computed: {
    productUrl(): string {
      return process.env.NODE_ENV !== 'production'
        ? 'https://969a-139-47-82-16.eu.ngrok.io/tartas'
        : 'https://tartaytantas.es/tartas'
    },
    rosconImage(): string {
      return require('@/assets/images/roscon/roscon-tartaytantas.webp')
    },
  },
})
</script>

<style lang="scss" scoped>
.roscon-promo {
  position: relative;
  width: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;

  @include breakpoint(sm) {
    min-height: 580px;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.15) 35%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 3rem 1.5rem 1.5rem;
    color: white;
    text-align: center;

    @include breakpoint(sm) {
      padding: 3rem 2rem 1.5rem;
    }
  }

  &__header {
    margin-bottom: 0.5rem;
  }

  &__subtitle {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

    @include breakpoint(sm) {
      font-size: 1.25rem;
    }
  }

  &__title {
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin: 0;

    @include breakpoint(sm) {
      font-size: 2.5rem;
    }
  }

  &__products {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: auto 0;
    padding: 0.5rem 0;
  }

  &__product {
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px;
    padding: 1rem 1.25rem;

    @include breakpoint(sm) {
      padding: 1.25rem 1.5rem;
    }
  }

  &__product-title {
    font-family: var(--font-serif);
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    color: white;

    @include breakpoint(sm) {
      font-size: 1.15rem;
    }
  }

  &__product-price {
    font-size: 0.9rem;
    margin: 0 0 0.75rem;
    color: rgba(255, 255, 255, 0.85);
    font-family: var(--font-serif);
    font-style: italic;
  }

  .buy-button {
    padding: 8px;
    background-color: transparent;
    border: 2px solid var(--color-brand-secondary);
    margin-top: 0;
    transition: background-color 0.2s, border-color 0.2s ease-out;

    &:hover {
      background-color: var(--color-white);
      border-color: var(--color-primary);
    }

    &:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }

  .buy-button__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .buy-button:hover .buy-button__inner {
    color: var(--color-dark);
  }

  .buy-button__image {
    width: 20px;
    margin-right: rem(8);
  }

  &__footer {
    margin-top: 0.75rem;
  }

  &__contact {
    font-size: 0.85rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    line-height: 1.6;

    @include breakpoint(sm) {
      font-size: 0.9rem;
    }
  }

  &__link {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: white;
    }

    &:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
    }
  }
}
</style>

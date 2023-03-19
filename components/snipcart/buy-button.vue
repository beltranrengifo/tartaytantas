<template>
  <button
    v-if="item.buyButton"
    v-bind="{
      ...getBasicProductMetadata({ item, image }),
      ...item.buyButton,
    }"
  >
    <span class="buy-button__inner">
      <img
        :src="require('@/assets/images/shopping-basket.svg')"
        alt="Cesta de la compra"
        class="buy-button__image"
      />
      Añadir
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductMetaData from '@/mixins/product-meta-data'
import { ProductItem } from '~/types'

export default Vue.extend({
  name: 'BuyButton',

  mixins: [ProductMetaData],

  props: {
    item: {
      type: Object as () => ProductItem,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.buy-button {
  padding: 8px;
  background-color: transparent;
  border: 2px solid var(--color-brand-secondary);
  margin-top: rem(24);
  transition: background-color, border-color 0.2s ease-out;

  &:hover {
    background-color: var(--color-white);
    border-color: var(--color-primary);
  }

  &__inner {
    display: flex;
    align-items: self-start;
  }

  &__image {
    width: 20px;
    margin-right: rem(8);
  }
}
</style>

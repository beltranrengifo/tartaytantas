<template>
  <div class="hamburguer-icon">
    <div
      role="button"
      class="hamburguer-icon__button"
      @click="handleClick"
      :class="{ 'hamburguer-icon__button--open': isOpen }"
    >
      <span class="hamburguer-icon__stick" />
      <span class="hamburguer-icon__stick" />
      <span class="hamburguer-icon__stick" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HamburguerIcon',

  data() {
    return {
      isOpen: false,
    }
  },

  methods: {
    handleClick(): void {
      this.isOpen = !this.isOpen
      this.$emit('hamburguerClick', this.isOpen)
    },
  },
})
</script>

<style lang="scss" scoped>
.hamburguer-icon {
  $--self: &;

  position: fixed;
  top: rem(8);
  right: rem(8);

  @include breakpoint(md) {
    display: none;
  }

  &__button {
    position: relative;
    width: rem(40);
    height: rem(28);
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;

    &--open {
      #{$--self}__stick:nth-child(1) {
        transform: rotate(45deg);
        top: 0;
        left: 3px;
      }

      #{$--self}__stick:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      #{$--self}__stick:nth-child(3) {
        transform: rotate(-45deg);
        top: 28px;
        left: 3px;
      }
    }
  }

  &__stick {
    display: block;
    position: absolute;
    height: rem(4);
    width: 100%;
    background: #d3531a;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: rem(12);
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: rem(24);
      transform-origin: left center;
    }
  }
}
</style>

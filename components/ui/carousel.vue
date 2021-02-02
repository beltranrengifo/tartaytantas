<template>
  <container fullwidth class="carousel">
    <slick v-bind="options">
      <template v-for="(slide, i) in slides">
        <article
          v-if="validSlide(slide)"
          :key="`${slide.image}/${i}`"
          class="relative"
        >
          <figure>
            <img
              :src="`${imageUrl(slide.image)}`"
              :alt="slide.imageAlt || 'Tartaytantas'"
              class="carousel__image"
            />
          </figure>
        </article>
      </template>
      <template #customPaging>
        <span
          class="dot block cursor-pointer rounded-full my-2 mx-1 w-3 h-3 bg-primary hover:bg-base transition duration-200"
        />
      </template>
    </slick>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Slides, Slide } from '@/types'
import ImageUrl from '@/mixins/image-url'

export default Vue.extend({
  name: 'Carousel',

  mixins: [ImageUrl],

  props: {
    slides: {
      type: (Array as unknown) as () => Slides,
      required: true,
    },
  },

  computed: {
    validSlide(): Function {
      return (slide: Slide): boolean => {
        return Boolean(Object.keys(slide).length) && Boolean(slide.image)
      }
    },

    options() {
      return {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        fade: true,
        pauseOnHover: false,
      }
    },
  },
})
</script>

<style scoped lang="scss">
.carousel {
  &__image {
    width: 100%;
    pointer-events: none;
    @include breakpoint(only-phone) {
      min-height: 60vh;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>

<style lang="scss">
.carousel {
  .slick-slide {
    margin-bottom: rem(-6); // shitty hack
    transform: scale(1.05);
    transition: opacity 1.2s ease 0s, visibility 1.2s ease 0s,
      transform 0.9s ease-out !important;
    &.slick-current {
      transform: scale(1);
    }
  }
}
</style>

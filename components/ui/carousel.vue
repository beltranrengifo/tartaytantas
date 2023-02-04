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
            <picture>
              <source type="image/webp" :srcset="imageUrlWebP(slide.image)" />
              <source type="image/jpeg" :srcset="imageUrl(slide.image)" />
              <img
                :src="`${imageUrl(slide.image)}`"
                :alt="slide.imageAlt || 'Tartaytantas'"
                class="carousel__image"
              />
            </picture>
          </figure>
          <title-block
            v-if="!!slide.content"
            :title="slide.content"
            :titleTag="slide.contentTag"
            font="font-serif"
            align="text-center"
            extraClasses="absolute carousel__lead md:text-big-title text-white font-medium"
            paddingTop=""
            paddingBottom=""
          />
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
import { Slide } from '@/types'
import ImageUrl from '@/mixins/image-url'

export default Vue.extend({
  name: 'Carousel',

  mixins: [ImageUrl],

  props: {
    slides: {
      type: Array as unknown as () => Slide[],
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
  &__lead {
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
}
</style>

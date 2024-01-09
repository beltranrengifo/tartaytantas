<template>
  <container
    tag="section"
    boxed
    class="product-grid relative"
    :class="[containerTailwind]"
  >
    <div class="grid gap-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <product-grid-item
        v-for="item in items"
        :key="item.title"
        :item="item"
        :image-dir="imageDir"
        :hover-suffix="hoverSuffix"
      />
    </div>
  </container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ProductGrid } from '@/types'
import Container from '@/components/layout/container.vue'
import ProductGridItem from '@/components/content/product-grid-item.vue'

export default Vue.extend({
  name: 'ProductGrid',

  components: {
    Container,
    ProductGridItem,
  },

  props: {
    containerTailwind: {
      type: String as () => ProductGrid['containerTailwind'],
      default: '',
    },
    imageDir: {
      type: String as () => ProductGrid['imageDir'],
      default: '',
    },
    hoverSuffix: {
      type: String as () => ProductGrid['hoverSuffix'],
      default: '',
    },
    items: {
      type: Array as () => ProductGrid['items'],
      required: true,
    },
  },

  computed: {
    src(): Function {
      return (src: string): object | Nullable<null> => {
        try {
          const dir = this.imageDir ? `${this.imageDir}/` : ''
          return require(`@/assets/images/${dir}${src}`)
        } catch (e) {
          return null
        }
      }
    },
  },
})
</script>

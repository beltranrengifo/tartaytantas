export interface ProductItem {
  image: string
  title: string
  description: string
}

export interface ProductGrid {
  items: Array<ProductItem>
  imageDir?: string
  hoverSuffix?: string
}

export interface ProductItem {
  image: string
  title: string
  description?: string
  listInfo?: string
}

export interface ProductGrid {
  items: Array<ProductItem>
  imageDir?: string
  hoverSuffix?: string
  containerTailwind?: string
}

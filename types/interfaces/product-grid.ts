export interface ProductItem {
  image: string
  title: string
  description?: string
  listInfo?: string
  hideListInfo?: boolean
  action: ItemAction
}

interface ItemAction {
  label: string
  url: string
}

export interface ProductGrid {
  items: Array<ProductItem>
  imageDir?: string
  hoverSuffix?: string
  containerTailwind?: string
}

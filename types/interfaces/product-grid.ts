export interface ProductItem {
  image: string
  title: string
  description?: string
  descriptionHelper?: string
  listInfo?: string
  hideListInfo?: boolean
  action: ItemAction
  buyButton?: BuyButton
}

interface BuyButton {
  classes?: string
  label?: string
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

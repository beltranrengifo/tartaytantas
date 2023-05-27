export interface ProductItem {
  [x: string]: string | undefined
  image: string
  title: string
  listInfo?: string
  hideListInfo?: boolean
  action?: ItemAction
  buyButton?: BuyButton
  details?: ItemDetails
}

interface ItemDetails {
  singlePageNavigationLink?: string
  description?: string
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

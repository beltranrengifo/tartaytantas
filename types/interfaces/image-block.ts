interface ImageBlockAction {
  label: string
  url: string
  target?: string
}
export interface ImageBlock {
  containerTailwind?: string
  image: string
  imageAlt?: string
  width?: string
  fullwidth?: boolean
  boxed?: boolean
  height?: string
  align?: string
  extraClasses?: string
  title?: string
  titleTag?: string
  action?: ImageBlockAction
}

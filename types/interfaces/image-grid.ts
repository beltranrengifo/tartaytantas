export interface GridImage {
  src: string
  alt?: string
  extraClasses?: string
}

export interface ImageGrid {
  images: Array<GridImage>
  columns?: string
  gap?: string
  paddingTop?: string
  paddingBottom?: string
  width?: string
  height?: string
}

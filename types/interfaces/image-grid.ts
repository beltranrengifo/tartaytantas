export interface GridImage {
  src: string
  alt?: string
}

export interface ImageGrid {
  images: Array<GridImage>
  columns?: number
  gap?: number
  paddingTop?: string
  paddingBottom?: string
  width?: string
  height?: string
}

export interface SlideButton {
  text: string
  link?: string
  target?: string
}

export interface Slide {
  image: string
  imageAlt: string
  content?: string
  contentTag?: string
  button?: SlideButton
}

export interface Slides {
  slides: Array<Slide>
}

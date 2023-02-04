export interface CtaButton {
  text: string
  link: string
  target?: string
}

export interface CallToAction {
  buttons: CtaButton[]
  title?: string
}

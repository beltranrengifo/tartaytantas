export interface CtaButton {
  text: string
  link: string
}

export interface CallToAction {
  buttons: CtaButton[]
  title?: string
}

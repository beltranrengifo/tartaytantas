type Nullable<T> = T | undefined | null

declare module '*.txt' {
  const content: string
  export default content
}

declare module 'vue-parallax'

declare module 'body-scroll-lock'

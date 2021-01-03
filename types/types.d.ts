type Nullable<T> = T | undefined | null

declare module '*.txt' {
  const content: string
  export default content
}

type ItemType = {
  [key: string]: string | number
}

export type Items = {
  map(arg0: (result: Result) => string): string
  filter(arg0: (item: { login: string }) => boolean): unknown
  [index: number]: ItemType
}

export type Result = {
  length: number
  html_url: string
  login: string
  avatar_url: string
  items: Items
}

export type Props = {
  username: string
  order: string
}

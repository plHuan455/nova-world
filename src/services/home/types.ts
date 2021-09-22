export type HomeBlock = {
  item?: Item[]
  title?: string
  lat?: string
  long?: string
  description?: string;
}

export type Link = {
  url?: string;
  text?: string;
  target?: string;
}

export type Item = {
  image?: string;
  description?: string;
  link?: Link;
  title?: string;
}

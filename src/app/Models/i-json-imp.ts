import { iProduct } from "./i-product"

export interface iJsonImp {
  products: iProduct[]
  total: number
  skip: number
  limit: number
}

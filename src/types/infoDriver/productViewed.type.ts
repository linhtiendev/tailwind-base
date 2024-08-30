export interface ProductImageViewed {
  Id: number
  Name: string
  Path: string
  AltText: string
  UpdateDate: string
}

export interface ProductViewedRes {
  viewId: number
  productId: number
  Alias: string
  Name: string
  Score: number
  Description: string
  UpdateDate: string
  productImage: ProductImageViewed[]
  ThumbnailImage: string
}

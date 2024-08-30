import { BaseRequest, ExtraFilterRequest } from 'types/api/api.type'

export type ProductFilterString = 'promotion' | 'popular' | 'newest' | 'sales' | 'low' | 'high'

export interface ProductsExtraFilterRequest extends BaseRequest, ExtraFilterRequest {
  CategoryId: number
  ShopHouseId: number
  CateBrandId: number
  IsRecommend: boolean
}

export interface ProductsByFilterRequest extends Pick<BaseRequest, 'PageSize' | 'PageNumber'> {
  SysProvinceId: number | null
  CateBrandId: (number | null)[] | null
  CategoryId: number | any
  IsPopular: boolean | null
  FromScore: number | null
  ToScore: number | null
  SortField: string | null
  SortType: string | null
  SearchString: string | null
  Status: boolean | null
  ShopHouseStatus: boolean | null
}

export interface ProductBonusRequest extends BaseRequest, ExtraFilterRequest {
  CategoryId: number
  ShopHouseId: number
  CateBrandId: number
  IsRecommend: boolean
}

export interface SaveProductViewed {
  ProductId: number
}

export interface VouchersBonus {
  Score: number
  StartDate: any
  EndDate: any
  HasUsed: boolean
  UserId: any
  GameAward: any[]
  ProductBonusVoucher: any[]
  WalletHistories: any[]
  Id: number
  Code: string
  Name: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: any
  UpdatedBy: any
  Status: number
}
export interface ProductsBonus {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  ProductId: any
  Code: string
  Alias: any
  Name: string
  Description: string
  Score: number
  CategoryId: number
  IsBonus: boolean
  ShopHouseId: number
  IsFeature: boolean
  IsRecommend: boolean
  IsPopular: any
  AmountSold: number
  CateBrandId: number
  IsUseAtShop: boolean
  IsWarranty: any
  Origin: string
  Warranty: string
  Status: number
  Avatar: any
}
export interface Category {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Alias: any
  Name: string
  ParentId: any
  IsPopular: boolean
  Status: number
  SysFileId: number
  ImagePath: string
}

export interface CateBrand {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: any
  UpdatedBy: any
  Id: number
  Code: string
  Name: string
  Description: string
  Status: number
}
export interface ProductImage {
  ThumbnailUrl: string
  ImageUrl: any
  Code: string
  Name: string
  MediaType: number
  ShopHouseId: number
  ProductId: number
  SysFileId: number
  IsThumbnail: boolean
  Status: number
}
export interface ShopHouse {
  WardName: string
  DictrictId: number
  DistrictName: string
  ProvinceId: number
  ProvinceName: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Name: string
  Nickname: string
  Description: string
  PhoneNumber: string
  Email: string
  TotalScore: number
  Banner: string
  Address: string
  SysWardId: number
  Logo: string
  ParentId: any
  UserId: string
  Status: number
  TotalSold: number
  TotalRefunded: number
  CancelledRatio: number
  BusinessName: string
  BusinessAddress: string
  BusinessSysWardId: number
  BusinessTaxNumber: string
  BusinessCreatedDate: string
  BusinessStatus: number
}
export interface ProductData {
  ProductsBonus: ProductsBonus[]
  VouchersBonus: VouchersBonus[]
  Category: Category
  CateBrand: CateBrand
  ShopHouse: ShopHouse
  ProductImages: ProductImage[]
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  ProductId: any
  Code: string
  Alias: string
  Name: string
  Description: string
  Score: number
  CategoryId: number
  IsBonus: boolean
  ShopHouseId: number
  IsFeature: any
  IsRecommend: boolean
  IsPopular: boolean
  AmountSold: number
  CateBrandId: number
  IsUseAtShop: boolean
  IsWarranty: boolean
  Origin: string
  Warranty: string
  Status: number
  Avatar: any
}
export interface ProductDetailType {
  Success: boolean
  Data: ProductData
  ErrorNumber: any
  Message: any
  Id: number
}

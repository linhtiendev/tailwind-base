export interface ProductCategory {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Name: string
  ParentId: number
  IsPopular: boolean
  Status: number
}

export interface ProductCateBrand {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Name: string
  Description: string
  Status: number
}

export interface ProductShopHouse {
  WardName: string
  DictrictId: number
  DistrictName: string
  ProvinceId: number
  ShopHouseProvinceName: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Name: string
  Description: string
  PhoneNumber: string
  Email: string
  TotalScore: number
  Banner: string
  Address: string
  SysWardId: number
  Logo?: string
  ParentId?: number
  UserId?: string
  Status: number
}

export interface ProductImageType {
  ThumbnailUrl: string
  ImageUrl: string
  Code: string
  Name: string
  ProductId: number
  SysFileId: number
  IsThumbnail: boolean
  Status: number
}

export interface ProductDataBaseResponse {
  Id: number
  Code: string
  Alias: string
  Name: string
  Description: string
  Score: number
  CategoryId: number
  ShopHouseId: number
  Status: number
  ThumbnailImage: string
  CategoryName: string
  ShopHouseName: string
  ShopHouseSysWardId: number
  ShopHouseProvinceName: string
  ShopHouseNickName: string
  AmountSold: number
  CreatedDate: string
  CreatedBy: string
  IsWarranty: boolean
  Origin: any
  Warranty: any
}

export interface ProductDataSearch {
  // Index: number
  // Id: number
  // Code: string
  // Alias: string
  // Name: string
  // Description: string
  // Score: number
  // CategoryId: number
  // IsBonus: boolean
  // ShopHouseId: number
  // IsFeature: any
  // IsRecommend: boolean
  // ShopHouseProvinceName: string
  // IsPopular: boolean
  // AmountSold: number
  // CateBrandId: number
  // IsUseAtShop: boolean
  // Origin: string
  // IsWarranty: boolean
  // Warranty: any
  // CreatedDate: string
  // CreatedBy: string
  // UpdatedDate: string
  // UpdatedBy: string
  // Status: number
  // ProductName: string
  // CategoryName: string
  // ThumbnailImage: string
  Id: number
  Code: string
  Alias: string
  Name: string
  Description: string
  Score: number
  CategoryId: number
  ShopHouseId: number
  Status: number
  ThumbnailImage: null
  CategoryName: string
  ShopHouseName: string
  ShopHouseSysWardId: number
  ShopHouseProvinceName: string
  AmountSold: number | string
  CreatedDate: string
  CreatedBy: string
}

import { ProductDataBaseResponse } from 'types/product/productResponse.type'

export interface Province {
  Code: string
  Name: string
}

export interface District {
  Code: string
  Province: Province
  Name: string
}

export interface SysWard {
  Code: string
  District: District
  Name: string
}

export interface ShopHouseData {
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
  SysWard: SysWard
  TotalScore: number
  Banner: any
  Address: string
  SysWardId: number
  Logo: any
  ParentId: any
  UserId: string
  Status: number
  TotalSold: number
  TotalRefunded: number
  CancelledRatio: number
  Products: ProductDataBaseResponse[]
}

export interface ShopHouseDataResponse {
  ShopHouse: ShopHouseData
  TotalRecords: number
  Records: ProductDataBaseResponse[]
}

export interface ShopHouseTypes<T> {
  Success: boolean
  Data: T
  ErrorNumber: any
  Message: any
  Id: number
}

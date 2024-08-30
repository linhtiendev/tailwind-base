import { AnyARecord } from 'dns'

import { DriverAddressType } from 'types/infoDriver/address.type'

interface ProductBonus {
  Code: any
  Name: string
  ThumbnailImage: string
  ProductId: number
  BonusId: number
  StartDate: string
  EndDate: string
  Status: number
}

export interface VoucherBonusItem {
  Code: string
  Name: number
  ProductId: number
  VoucherId: number
  Status: any
  Score: number
}

export interface Product {
  ProductBonusList: ProductBonus[]
  VoucherBonusList: VoucherBonusItem[]
  Quantity: number
  ProductId: number
  Code: any
  Alias: any
  Name: string
  Description: string
  Score: number
  CategoryId: number
  IsBonus: any
  ShopHouseId: number
  IsFeature: AnyARecord
  IsRecommend: any
  IsPopular: any
  AmountSold: any
  CateBrandId: number
  IsUseAtShop: any
  Origin: any
  Warranty: any
  Status: number
  ThumbnailImage: string
  ShopHouseName: string
}

export type OrderStatusCode = 'dang-xu-ly' | 'dang-giao' | 'da-giao' | 'da-huy' | ''

export interface OrderStatusType {
  Name: string
  CateOrderStatusId: number
  IsActive: boolean
  CreateConfirm: string
}

export interface User {
  FullName: string
  Birthday: string
  PhoneNumber: string
  AvatarUrl: string
  Gender: boolean
  Email: string
  TotalScore: number
  UserId: string
  DriverGroupId: number
  Position: any
  Ranking: number
  RankingTitle: string
  TotalScoreUseInMonth: number
  TotalScoreUseInQuarter: number
  DriverAddress: DriverAddressType[]
  DriverHealth: any[]
  DriverLicense: any[]
  DriverOther: any[]
  DriverTraining: any[]
  CarLicense: any
  Car: any
  Id: number
  Code: string
  Name: any
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Status: number
}

export interface OrderRes {
  ShopHouseName: string
  ShopHouseId: number
  OrderId: number
  BonusId: number
  TotalScope: number
  TotalScore: number
  ProvisionalCalculation: number
  TransportFee: number
  Address: string
  OrderStatusName: string
  OrderStatusCode: OrderStatusCode
  EstimatedDeliveryDate: any
  Products: Product[]
  ProductList: any
  ShopHouseNickName: string
  CreatedDate: string
}

export interface Shop {
  ShopHouseName: string
  OrderStatusCode: string
  Code: string
  OrderId: number
  ShopHouseId: number
  ProductId: number
  BonusId: number
  CateDeliveryName: string
  Products: Product[]
  TotalScope: number
  ProvisionalCalculation: number
  TransportFee: number
  Address: string
  OrderStatusName: string
  EstimatedDeliveryDate: any
  Id: number
  Name: any
  UserId: any
  CateDeliveryId: any
  DeliveryAddress: any
  DeliveryScore: any
  TotalScore: any
  MessageToShop: any
  CateOrderStatusId: any
  Status: any
  OrderStatusReasion: any
  ShopHouseNickName: string
  PhoneNumber: string
  CreatedDate: any
}

export interface OrderDetail {
  Order: Shop
  OrderStatus: OrderStatusType[]
  User: User
}

export interface OrderStatusResponse {
  CreatedDate: string
  CreatedBy: any
  Id: number
  Code: string
  Name: string
  Sort: any
  Status: number
}

export interface OrderType {
  Index: number
  Code: string
  Id: number
  Name: string
  Status: number
  CreatedDate: string
  CreatedBy: any
  MessageToShop: string
  ShopHouseId: number
  TotalScore: number
  DeliveryScore: number
  DeliveryAddress: string
  CateDeliveryId: number
  UserId: string
  ProductId: number
  ProductName: any
  Score: number
  Quantity: number
  BonusId: number
  ProductBonusName: any
  ShipmentCateOrderStatusId: number
  OrderShipmentStatus: number
  OrderStatusName: string
  OrderStatusCode: string
  ShopHouseName: string
  ShopHousePhoneNumber: string
  PhoneEmail: string
  SysWardId: number
  ProductBonusSysFileId: number
  ProductPath: any
  CateDeliveryCode: string
  CateDeliveryName: string
  ProductSysFileId: number
  ProductBonusPath: any
  CateOrderStatusId: any
  ProductList: any
  FullName: string
  PhoneNumber: string
  CarLicenseCode: string
}

export interface CancelOrderButtonRequest {
  CateOrderStatusId: number
  OrderId: number
  OrderStatusReasion: string
  Status: number
}

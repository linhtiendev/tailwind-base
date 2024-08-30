export interface VoucherStatData {
  TotalVoucher: number
  TotalHasUsed: number
  TotalNotUse: number
  TotalExpried: number
}

export interface VoucherData {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  Score: number
  StartDate?: string
  EndDate?: string
  HasUsed: boolean
  IsExpried: boolean
  UserId?: string
  Status: number
}

export interface VoucherDataType {
  Success: boolean
  Data: VoucherData[]
  ErrorNumber: any
  Message: any
  Id: number
}

export interface VoucherDepositRequest {
  VoucherCode?: string
  DriverId?: number
  ShopHouseId?: any
  TransactionType?: string
}

export interface AllVoucherParams {
  HasUsed?: boolean
  IsExpried?: boolean
  PageSize: number
  PageNumber: number
}

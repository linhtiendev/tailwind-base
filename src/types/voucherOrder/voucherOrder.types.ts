export interface OrderStatusHistoryItem {
  OrderStatus: number
  OrderStatusTitle: string
  OrderStatusDateTime: string
}

export interface VoucherOrderData {
  Id: number
  Code: string
  Name: string
  Score: number
  Quantity: number
  Total: number
  UserId: string
  DriverId: number
  OrderDate: string
  OrderStatus: number
  OrderStatusTitle: string
  OrderStatusHistoryList: OrderStatusHistoryItem[]
}

export interface VoucherOrder2Data {
  Id: number
  Code: string
  Name: string
  Score: number
  Quantity: number
  DriverId: number
  OrderDate: string
  OrderStatusCurrent: number
  OrderStatusCurrentTitle: string
  OrderStatusHistoryList: OrderStatusHistoryItem[]
}

export interface BuyVoucherParams {
  Score: number
  Quantity: number
  DriverId?: number
}

export interface AllVoucherOrderParams {
  Code: string
  OrderStatus: number
  PageSize: number
  PageNumber: number
}

export interface CancelVoucherOrderParams {
  Id: number
}

export interface VoucherOrderParams {
  Id: string | string[] | undefined
}

export const VoucherOrderStatus = { PROCESSING: 1, PAID: 2, COMPLETED: 3, CANCELLED: 4 }

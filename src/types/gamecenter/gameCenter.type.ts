export interface GameAward {
  Id: number
  LevelAward: string
  UserId: string
  UserName: string
  UserAvatarUrl: string
  LuckyNumber: string
}

export interface GameUser {
  Id: number
}

export interface EventDetail {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Name: string
  Description: string
  FromDate: string
  ToDate: string
  Score: number
  TicketPool: number
  Fee: number
  Type: string
  PinSpot: boolean
  Status: number
  GameAward: GameAward[]
  GameUser: GameUser[]
  FirstPrizeScore: number
  FirstPrizeQuantity: number
  FourthPrizeScore: number
  FourthPrizeQuantity: number
}

export interface Data {
  UserId: string
  LuckyNumber: string
  CountdownNumber: number
  TotalJoinedMembers: number
  Event: EventDetail
}

export interface PaginationData {
  TotalRecords: number
  Records: EventDetail[]
}

export interface GameTypes<T> {
  Success: boolean
  Data: T
  ErrorNumber: any
  Message: any
  Id: number
}

export interface GameRequest {
  Token: string
  EventId: string
  LuckyNumber: number
}

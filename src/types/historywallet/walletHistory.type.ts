export interface HistoryCard {
  CreatedDate?: string
  CreatedBy?: string
  Id?: number
  Code: string
  Name?: string
  TotalScoreBefore: number
  Withdraw?: number
  Deposit: number
  TransactionType: string
  TransactionDate: string
  UserId: string
  VoucherId: number
  OrderId?: null
  OrderCode?: string
  ShopHouseName?: string
  GameId?: null
  GameName?: string
  Description?: null
  Status?: number
}

export interface DriverRankingCard {
  Index?: number
  FullName: string
  CarLicenseCode: string
  JoinDate?: string
  Ranking: number
  RankingTitle?: string
  TotalScore: number
  Position?: string
  AvatarUrl?: string
  DriverGroupName?: string
  UserId?: string
  DriverId?: number
}

export interface DriverGroupRankingCard {
  Index?: number
  DriverGroupId?: number
  Name: string
  RankingGroup: number
  RankingGroupTitle: string
  TotalScore: number
  DriverCount?: number
}

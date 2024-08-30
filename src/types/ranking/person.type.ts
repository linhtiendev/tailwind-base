export interface PersonItem {
  Index: number
  FullName: string
  CarLicenseCode: string
  JoinDate: string
  Ranking: number
  RankingTitle: string
  TotalScore: number
  Position: string
  AvatarUrl?: string
  DriverGroupName: string
  UserId: string
  DriverId: number
}

export interface PersonRankingData {
  TotalRecords: number
  Records: PersonItem[]
}

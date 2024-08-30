export interface GroupItem {
  Index: number
  DriverGroupId: number
  Name: string
  RankingGroup: number
  RankingGroupTitle: string
  TotalScore: number
  DriverCount: number
}

export interface GroupRankingData {
  TotalRecords: number
  Records: GroupItem[]
}

export interface DriverInGroup {
  DriverId: number
  FullName: string
  Gender: any
  CarLicenseCode: string
  AvatarUrl: any
  Position: any
  Ranking: number
  RankingTitle: string
  JoinDate: string
}

export interface GroupDriverDataItem {
  Index: number
  DriverGroupId: number
  Name: string
  RankingGroup: number
  RankingGroupTitle: string
  TotalScore: number
}

export interface DriverExtra {
  DriverId: number
  FullName: string
  Gender: any
  Birthday: string
  Email: string
  Status: number
  CarLicenseCode: any
  TransportUnitName: string
}

export interface GroupDriverData {
  TotalRecords: number
  Records: GroupDriverDataItem[]
}

export interface RemoveDriverToGroupReq {
  DriverGroupId: number
  DriverId: number
  Position: string
}

export interface AddDriverToGroupReq {
  DriverGroupId: number
  DriverIds: string
}

export interface UpdateNameGroupReq {
  Name: string
  Id: number | undefined
}

export interface DataTypeDriverTable {
  key: React.Key
  DriverId: number
  FullName: string
  code: number
  CarLicenseCode: string
  TransportUnitName: string
  Status: number
}

export interface ChangeDriverCodeReq {
  DriverId: number
  CarLicenseCodeNew: string
  Note: string
}

export interface CreateCarLicenseCodeRequest {
  Code: string
  DriverId: number
  Status: number
}

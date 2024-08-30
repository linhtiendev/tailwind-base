export interface Driver {
  Id: number
  Name: any
  FullName: string
  AvatarUrl: string
  Gender: boolean | null
  PhoneNumber: string
  Email: string
  Birthday: string
  TotalScore: number
  Status: number
  UserId: string
  DriverGroupId: number
  Ranking: number
  RankingTitle: any
  Position: string
  TotalScoreUseInMonth?: number
  TotalScoreUseInQuarter?: number
  IsChangePasswordDefault?: boolean
}

export interface CarLiense {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: any
  UpdatedBy: any
  Id: number
  Code: string
  Name: string
  LicensePlateColor: string
  PhoneNumber: string
  Email: string
  SysWardId: number
  Address: string
  Note: any
  FrontImage: string
  BehindImage: string
  OldCarLicenseId: any
  DriverId: number
  Status: number
}

export interface Car {
  Id: number
  DriverId: number
  TransportUnitId: number
  TransportUnitName: string
  JoinDate: string
  RenewalDate: string
  BadgeReleaseDate: string
  BadgesExpiryDate: string
  ServiceContractExpiryDate: string
  BadgeImage: string
  ShippingOrderImage: string
  ServiceContractImage: string
}

export interface InformationDriverAccountType {
  driver: Driver
  carLiense: CarLiense[]
  car: Car[]
}

export interface UpdateAvatarReq {
  Email: string
  PhoneNumber: string
  AvatarUrl: string
  UserName: string
  Gender: boolean | null
  Birthday: string
  Id: number | string
  Status: number
}

export interface UpdateDriverProfileReq {
  FullName: string
  Gender: boolean | null
  PhoneNumber: string
  Email: string
  UserName: string
  AvatarUrl?: string
  Birthday: string
  Id: number
}

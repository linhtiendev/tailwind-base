export interface DriverAddressType {
  DriverId: number
  Address: string
  SysWardId: number
  PhoneNumber: string
  FullAddress: string
  Id: number
}

export interface UpdateDriverAddressReq {
  Code: string
  Name: string
  DriverId: number
  PhoneNumber: string
  Address: string
  SysWardId: number | null
  Status: number
  Id: number
}

export interface UpdateDriverAddressRes {
  DriverId: number
  PhoneNumber: string
  Address: string
  SysWardId: number
  SysWard: any
  Driver: any
  Id: number
  Code: string
  Name: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Status: number
}

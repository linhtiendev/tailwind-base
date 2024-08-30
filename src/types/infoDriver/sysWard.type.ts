export interface RecordWard {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  ShortName?: string
  ProvinceId: number
  DistrictId: number
  Status: number
}

export interface DataWard {
  TotalRecords: number
  Records: RecordWard[]
}

export interface SysWardType {
  Success: boolean
  Data: DataWard
  ErrorNumber: any
  Message: any
  Id: number
}

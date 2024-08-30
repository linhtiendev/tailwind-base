export interface RecordProvince {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  Status: number
}

export interface DataProvince {
  TotalRecords: number
  Records: RecordProvince[]
}

export interface SysProvinceType {
  Success: boolean
  Data: DataProvince
  ErrorNumber: any
  Message: any
  Id: number
}

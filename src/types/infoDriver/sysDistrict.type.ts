export interface RecordDistrict {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  ProvinceId: number
  Status: number
}

export interface DataDistrict {
  TotalRecords: number
  Records: RecordDistrict[]
}

export interface SysDistrictType {
  Success: boolean
  Data: DataDistrict
  ErrorNumber: any
  Message: any
  Id: number
}

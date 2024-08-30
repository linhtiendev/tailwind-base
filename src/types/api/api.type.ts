export type ApiResponseState<T> = {
  Data: T
  ErrorNumber: number
  Id: number
  Message: string
  Success: boolean
}

export type ApiResponseListData<T> = {
  Records: T[]
  TotalRecords: number
}

export type BaseRequest = {
  Status: number
  Code: string
  Name: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  PageSize: number
  PageNumber: number
}

export type ExtraFilterRequest = {
  SortBy: string
  OrderBy: string
}

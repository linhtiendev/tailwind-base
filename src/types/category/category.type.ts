export interface CategoryData {
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Id: number
  Code: string
  Name: string
  ParentId: any
  IsPopular: boolean
  Status: number
}

export interface CategoryType {
  Success: boolean
  Data: CategoryData
  ErrorNumber: any
  Message: any
  Id: number
}

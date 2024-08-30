export interface ChildCategory {
  CreatedDate: string
  CreatedBy: string
  Childs: ChildCategory[]
  Id: number
  Code: string
  Alias: string
  Name: string
  ParentId: number
  IsPopular: boolean
  Status: number
  SysFileId: number
  ImagePath: string
}

export type CategoryResponse = ChildCategory

export interface CateBrandResponse {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  Description: string
  Status: number
}

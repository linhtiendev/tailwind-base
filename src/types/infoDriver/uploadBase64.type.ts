export interface PostFileUploadRes {
  Path: string
  Type: string
  AltText: string
  FileSize: number
  Id: number
  Code: string
  Name: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Status: number
}

export interface PostFileUploadReq {
  Id: number
  Code: string
  Name: string
  CreatedDate: string
  CreatedBy: string
  UpdatedDate: string
  UpdatedBy: string
  Status: number
  Path: string
  Type: string
  AltText: string
  FileSize: number
  Base64String: string
}

export interface AdvertisementResponse {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  ContentAd: string
  CateAdvertisementPositionId: number
  Image: string
  ExternalLink: string
  StartDate: string
  EndDate: string
  Status: number
}

export interface CateAdvertisementPositionResponse {
  CreatedDate: string
  CreatedBy: string
  Id: number
  Code: string
  Name: string
  ImageWidth: number
  ImageHeight: number
  Status: number
}

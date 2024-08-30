import { BaseRequest } from 'types/api/api.type'

export interface CreateCategoryRequest {
  Code: string
  Name: string
  ParentId: number
  IsPopular: true
  Status: number
}

export type CategoryRequest = BaseRequest

export type CateBrandRequest = BaseRequest

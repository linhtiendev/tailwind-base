import { apiName } from 'constants/api.constant'
import { ApiResponseListData, ApiResponseState, BaseRequest } from 'types/api/api.type'
import { ProductData } from 'types/product/product.type'

import { apiServices } from './api.services'

export const productApi = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query<
      ApiResponseState<ApiResponseListData<ProductData>>,
      Partial<BaseRequest>
    >({
      query: (request) => ({
        url: `${apiName.GET_ALL_PRODUCT}`,
        method: 'GET',
        params: {
          ...request,
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  useGetAllProductQuery,
  util: { getRunningQueriesThunk },
} = productApi

// Export endpoints for use in SSR
// export const { getProductById, searchProductsByString } = productApi.endpoints

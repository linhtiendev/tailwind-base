/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable consistent-return */
import { FetchArgs, createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { getSession, signOut } from 'next-auth/react'
import { HYDRATE } from 'next-redux-wrapper'

import { HttpStatus } from 'constants/httpStatus.constant'

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: async (headers) => {
    const session = await getSession()
    const accessToken = session?.user.accessToken
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }

    return headers
  },
})

// const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 })
const staggeredBaseQueryWithBailOut = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions)
    // bail out of re-tries immediately if unauthorized,
    // because we know successive re-retries would be redundant
    const queryStatus = result.error?.status
    if (queryStatus === HttpStatus.TOKEN_EXPIRES || queryStatus === HttpStatus.UNAUTHORIZED) {
      signOut({ callbackUrl: '/auth/login' })
    }
    if (queryStatus === HttpStatus.FORBIDDEN || queryStatus === HttpStatus.NOT_FOUND) {
      retry.fail(result.error)
    }

    return result
  },
  {
    maxRetries: 3,
  }
)

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const apiServices = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'vataLoyaltyApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  baseQuery: staggeredBaseQueryWithBailOut,
  keepUnusedDataFor: 90, // Giữ data trong cache sau 90s sẽ xóa (mặc định 60s)
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: [
    'Category',
    'Driver',
    'Order',
    'Cart',
    'HistoryDriver',
    'Game',
    'Voucher',
    'VoucherOrder',
    'AddToCart',
    'UpdateCart',
    'RemoveCart',
  ],
  // configure rehydration
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})

import { apiName } from 'constants/api.constant'
import { ApiResponseListData, ApiResponseState } from 'types/api/api.type'
import { GroupRankingData } from 'types/ranking/group.type'
import { PersonRankingData } from 'types/ranking/person.type'

import { apiServices } from './api.services'

export const rankingApi = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    getPersonRankingByMonth: builder.mutation<
      ApiResponseState<ApiResponseListData<PersonRankingData>>,
      any
    >({
      query: (request) => ({
        url: apiName.GET_RANKING_BY_MONTH,
        method: 'GET',
        params: { ...request, PageSize: 10 },
      }),
    }),
    getPersonRankingByQuarter: builder.mutation<
      ApiResponseState<ApiResponseListData<PersonRankingData>>,
      any
    >({
      query: (request) => ({
        url: apiName.GET_DRIVER_RANKING_BY_QUARTER,
        method: 'GET',
        params: { ...request, PageSize: 10 },
      }),
    }),
    getPersonRankingByYear: builder.mutation<
      ApiResponseState<ApiResponseListData<PersonRankingData>>,
      any
    >({
      query: (request) => ({
        url: apiName.GET_DRIVER_RANKING_BY_YEAR,
        method: 'GET',
        params: { ...request, PageSize: 10 },
      }),
    }),
    getGroupRankingByMonth: builder.mutation<
      ApiResponseState<ApiResponseListData<GroupRankingData>>,
      any
    >({
      query: (request) => ({
        url: apiName.GET_GROUP_RANKING_BY_MONTH,
        method: 'GET',
        params: { ...request, PageSize: 10 },
      }),
    }),
    getGroupRankingByQuarter: builder.mutation<
      ApiResponseState<ApiResponseListData<GroupRankingData>>,
      any
    >({
      query: (request) => ({
        url: apiName.GET_GROUP_RANKING_BY_QUARTER,
        method: 'GET',
        params: { ...request, PageSize: 10 },
      }),
    }),
    getGroupRankingByYear: builder.mutation<
      ApiResponseState<ApiResponseListData<GroupRankingData>>,
      any
    >({
      query: (request) => ({
        url: apiName.GET_GROUP_RANKING_BY_YEAR,
        method: 'GET',
        params: { ...request, PageSize: 10 },
      }),
    }),
  }),
})

export const {
  useGetGroupRankingByMonthMutation,
  useGetGroupRankingByQuarterMutation,
  useGetGroupRankingByYearMutation,
  useGetPersonRankingByQuarterMutation,
  useGetPersonRankingByMonthMutation,
  useGetPersonRankingByYearMutation,
} = rankingApi

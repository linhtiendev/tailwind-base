import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GroupItem } from 'types/ranking/group.type'
import { PersonItem } from 'types/ranking/person.type'

import type { RootState } from '../store'

interface initType {
  Loading: boolean
  Data: {
    ListPersonRanking: PersonItem[]
    ListGroupRanking: GroupItem[]
  }
}

const initialState: initType = {
  Loading: false,
  Data: {
    ListPersonRanking: [],
    ListGroupRanking: [],
  },
}

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    setLoadingRanking: (state, action: PayloadAction<boolean>) => {
      state.Loading = action.payload
    },
    setListDataPersonRanking: (state, action: PayloadAction<PersonItem[]>) => {
      state.Data.ListPersonRanking = action.payload
      state.Loading = false
    },
    setListDataGroupRanking: (state, action: PayloadAction<GroupItem[]>) => {
      state.Data.ListGroupRanking = action.payload
      state.Loading = false
    },
  },
})

export const selectLoadingRanking = (state: RootState) => state.ranking.Loading
export const getDataPersonRanking = (state: RootState) => state.ranking.Data.ListPersonRanking
export const getDataGroupRanking = (state: RootState) => state.ranking.Data.ListGroupRanking

// Action creators are generated for each case reducer function
export const { setLoadingRanking, setListDataPersonRanking, setListDataGroupRanking } =
  rankingSlice.actions

export default rankingSlice.reducer

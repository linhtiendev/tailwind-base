import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createWrapper } from 'next-redux-wrapper'

import { apiServices } from 'services/api.services'
import { rankingApi } from 'services/ranking.service'

import { rtkQueryErrorLogger } from './middleware'
import rootReducer from './reducers'

export const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      rankingApi.middleware,
      apiServices.middleware,
      rtkQueryErrorLogger,
    ]),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const makeStore = () => store
export const wrapper = createWrapper(makeStore, { debug: true })

import rankingReducer from 'redux/slices/ranking.slice'
import { apiServices } from 'services/api.services'

const rootReducer = {
  ranking: rankingReducer,
  [apiServices.reducerPath]: apiServices.reducer,
}

export default rootReducer

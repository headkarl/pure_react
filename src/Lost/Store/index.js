import { createStore, combineReducers } from 'redux'

import * as reducer from '@/Reducer/index'

const store = createStore(
  combineReducers({
    ...reducer
  })
)

export default store

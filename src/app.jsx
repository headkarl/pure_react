import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import 'antd-mobile/dist/antd-mobile.css'
import '@/Assets/icon/iconfont.css'
import '@/Assets/sass/main.scss'

import routes from '@/Router/index'
import * as reducer from '@/Reducer/index'

const middleware = routerMiddleware(browserHistory)
const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import 'antd/dist/antd.css'
import '@/Assets/sass/main.scss'

import store from '@/Store/index'
import routes from '@/Router/index'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)

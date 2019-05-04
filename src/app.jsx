import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'antd-mobile/dist/antd-mobile.css'
import '@/Assets/icon/iconfont.css'
import '@/Assets/sass/main.scss'

import store from '@/Store/index'
import routes from '@/Router/index'

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)

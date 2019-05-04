import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import Bone from '@/Component/foundation/bone'
import Login from '@/Component/foundation/login'

import Course from '@/Component/course/main'
import Account from '@/Component/account/main'

browserHistory.listen((to) => {
  console.log(to)
})

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Bone}>
      <IndexRoute component={Course} />
      <Route path="login" component={Login} />
      <Route path="account" component={Account} />
    </Route>
  </Router>
)

export default routes

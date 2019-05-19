import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { requireAuthentication, redirectToWechat } from '../utils'

import Bone from '@/Component/foundation/bone'
// import Login from '@/Component/foundation/login'

import Course from '@/Component/course/main'
import Account from '@/Component/account/main'

// browserHistory.listen((to) => {
//   console.log(to)
// })

const routes = (
  <Route path="/" component={Bone}>
    <IndexRoute component={Course} />
    {/* <Route path="login" component={Login} /> */}
    <Route path="login" onEnter={redirectToWechat} />
    <Route path="account" component={requireAuthentication(Account)} />
  </Route>
)

export default routes

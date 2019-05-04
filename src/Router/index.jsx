import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Bone from '@/Component/foundation/bone'
import Login from '@/Component/foundation/login'

import Course from '@/Component/course/main'

// import { About, Inbox, Message, Dashboard } from '@/Component/test/index'
// import ReduxDemo from '@/Component/test/redux'

const routes = (
  <Route path="/" component={Bone}>
    <IndexRoute component={Course} />
    <Route path="login" component={Login} />
    {/* <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
    <Route path="redux" component={ReduxDemo} /> */}
  </Route>
)

export default routes

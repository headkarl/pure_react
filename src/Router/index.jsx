import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '@/Component/foundation/app'
import { About, Inbox, Message, Dashboard } from '@/Component/test/index'
import ReduxDemo from '@/Component/test/redux'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
      <Route path="messages/:id" component={Message} />
    </Route>
    <Route path="redux" component={ReduxDemo} />
  </Route>
)

export default routes

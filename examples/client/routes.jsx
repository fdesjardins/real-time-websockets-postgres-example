import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { ConnectedRouter, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

const App = children => (
  <div>
    <h1>Examples</h1>
  </div>
)

export default (
  <Route path='/' component={App} />
)

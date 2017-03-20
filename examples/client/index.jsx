import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { Router, browserHistory } from 'react-router'
import { Route, IndexRoute } from 'react-router-dom'

import routes from './routes'
import configureStore from './store'

import App from './components/App/App'
import Counter from './components/Counter/Counter'
import TodoList from './components/TodoList/TodoList'


const initialState = {
  counter: {
    value: 0
  }
}

const store = configureStore(initialState)
const history = syncHistoryWithStore(createBrowserHistory(), store)
// const history = createBrowserHistory()
//
// const middleware = routerMiddleware(history)
//
// const store = configureStore(middleware)

// const App = children => (
//   <div>
//     <h1>Examples</h1>
//     <ul>
//       <li><Link to="/counter">Counter</Link></li>
//     </ul>
//   </div>
// )

// const history = createBrowserHistory()

// const history = syncHistoryWithStore(
//   createBrowserHistory(),
//   store
// )

// console.log(App)
//
// const routes = (
//   <div>
//     <Route exact path="/" component={App}/>
//     <Route path="/todo" component={Todo}/>
//   </div>
// )

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <div id='root'>
          <Route path='/' component={App} />
          <Route path='/counter' component={Counter} />
          <Route path='/todo' component={TodoList} />
        </div>
      </Router>
    </Provider>
  ),
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    console.log('here?')
    const NextApp = require('./components/App/App').default
    ReactDOM.render(
      (
        <Provider store={store}>
          <Router history={history}>
            <div id='root'>
              <Route path='/' component={NextApp} />
              <Route path='/counter' component={Counter} />
              <Route path='/todo' component={TodoList} />
            </div>
          </Router>
        </Provider>
      ),
      document.getElementById('app'))
  })
}

//   Object.assign(store, JSON.parse(data))
//   console.log(store.latestMessage)
//   renderApp()
// }
//
// const ws = new WebSocket('ws://localhost:3002')
//
// ws.onopen = () => {
//   console.log('socket open')
//   ws.send(JSON.stringify({ event: 'hello from client' }))
// }
//
// ws.onmessage = ev => {
//   console.log('here')
//   updateStore(ev.data)
// }
//
// document.getElementById('next').addEventListener('click', () => {
//   console.log('onclick:next')
//   ws.send(JSON.stringify({
//     event: 'next'
//   }))
// })
//
// document.getElementById('mutate').addEventListener('click', () => {
//   console.log('onclick:mutate')
//   ws.send(JSON.stringify({
//     event: 'mutate'
//   }))
// })

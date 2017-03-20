import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './epics/root.js'
import rootReducer from './reducers/root.js'
//
// const epicMiddleware = createEpicMiddleware(rootEpic)

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // applyMiddleware(middleware)
  )
  return store
}

export default configureStore

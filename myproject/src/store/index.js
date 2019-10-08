import { applyMiddleware, createStore, compose } from 'redux'
import reducer from '../reducers/index'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
const logger = createLogger()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)
export default store

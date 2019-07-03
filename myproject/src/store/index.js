import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers/index'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
const logger = createLogger()

const store = createStore(reducer, applyMiddleware(thunk, logger))
export default store

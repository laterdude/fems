import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './app'
import contentsReducer from './contents'
import viewportReducer from './viewport'

export default createStore(
  combineReducers({
    app: appReducer,
    contents: contentsReducer,
    viewport: viewportReducer
  }),
  applyMiddleware(thunk)
)

// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import window from './window'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    window
  })

export default createRootReducer

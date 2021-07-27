// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import window from './window'
import desktop from './desktop'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    window,
    desktop
  })

export default createRootReducer

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/root'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

const history = createBrowserHistory()

function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
      )
    )
  )

  return store
}

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route exact path="/" render={() => <div>Match</div>} /> */}
        <Route render={() => <App />} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

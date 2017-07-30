import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Routes from './routes'
import store from './reducers/configureStore'

import './../css/style.css'

const rootElement = document.getElementById('app')
const history = createBrowserHistory()

const component = (
  <Router history={history}>
    {Routes(store)}
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <div>
      {component}
    </div>
  </Provider>,
  rootElement
)

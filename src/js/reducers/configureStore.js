import { createStore as _createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)

let finalCreateStore

/* eslint-disable no-undef */
/* eslint-disable global-require */
if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
  const { persistState } = require('redux-devtools')
  const { DevTool } = require('./../containers')
  finalCreateStore = compose(
    createStoreWithMiddleware,
    window.devToolsExtension
      ? window.devToolsExtension()
      : DevTool.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(_createStore)
} else {
  finalCreateStore = compose(createStoreWithMiddleware)(_createStore)
}

const store = finalCreateStore(reducers, window.__data)

if (__DEVELOPMENT__ && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'))
  })
}

export default store

/* eslint-disable no-var */
/* eslint-disable one-var */
/* eslint-disable func-names */

var jsdom = require('jsdom').jsdom,
  exposedProperties = ['window', 'navigator', 'document']

require('babel-register')()

process.env.NODE_ENV = 'test'

require.extensions['.css'] = function() {
  return null
}
require.extensions['.png'] = function() {
  return null
}
require.extensions['.jpg'] = function() {
  return null
}

global.document = jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js',
}

documentRef = document // eslint-disable-line no-undef

import api from './api'

function routing(app) {
  app.use('/api', api)
}

module.exports = routing

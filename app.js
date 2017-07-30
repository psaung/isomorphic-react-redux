//server.js
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

let app = express()
let routing = require('./app/routes/index')

app.enable('trsut proxy');
app.use(express.static(path.join(__dirname, 'dist')))

// enable cors
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

routing(app)

module.exports = app;

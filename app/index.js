import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()
const routing = require('./routes/index')

app.enable('trsut proxy')

app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// enable cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

routing(app)

module.exports = app

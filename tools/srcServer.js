import express from 'express'
import webpack from 'webpack'
import path from 'path'
import open from 'open'
import Dashboard from 'webpack-dashboard'
import DashboardPlugin from 'webpack-dashboard/plugin'

import config from './../webpack.config.dev'

const port = 8080
const app = express()
const compiler = webpack(config)
const dashboard = new Dashboard()

compiler.apply(new DashboardPlugin(dashboard.setData))

app.use(require('webpack-hot-middleware')(compiler))

app.use(
  require('webpack-dev-middleware')(compiler, {
    quiet: true,
  })
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

/* eslint-disable no-console */
app.listen(port, err => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Starting React application on port${port}`)
    open(`http://localhost:${port}`)
  }
})

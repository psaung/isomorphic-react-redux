import React from 'react'
import { Route } from 'react-router'
import { Todo } from './containers'

/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable no-console */
export default () =>
  <Route path="/">
    <Route path="/" component={Todo} />
  </Route>

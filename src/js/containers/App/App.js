import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div className="App">
        {children}
      </div>
    )
  }
}

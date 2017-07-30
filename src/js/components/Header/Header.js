import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid'
import { connect } from 'react-redux'

import TaskList from './../TaskList/TaskList'
import TaskInput from './../TaskList/TaskInput'

import * as apiActions from './../../actions/api-actions'

@connect(state => ({
  tasks: state.api.result,
}))
class Header extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(apiActions.getResource())
  }

  constructor() {
    super()
    this.addTask = this.addTask.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  addTask(task) {
    this.props.dispatch(
      apiActions.addResource({
        id: uuid.v1(),
        name: task,
        complete: false,
      })
    )
  }

  toggleComplete(id, complete) {
    this.props.dispatch(
      apiActions.updateResource(id, {
        complete: !complete,
      })
    )
  }

  deleteTask(id) {
    this.props.dispatch(apiActions.deleteResource(id))
  }

  render() {
    const { tasks } = this.props
    return (
      <div className="wrapper">
        <h1>Tasks</h1>
        <TaskList
          tasks={tasks}
          toggleComplete={this.toggleComplete}
          deleteTask={this.deleteTask}
        />
        <TaskInput addTask={this.addTask} />
      </div>
    )
  }
}

export default Header

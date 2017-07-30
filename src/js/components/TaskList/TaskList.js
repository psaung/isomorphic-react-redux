import React from 'react'
import PropTypes from 'prop-types'

import TaskItem from './TaskItem'

const TaskList = ({ tasks, toggleComplete, deleteTask }) =>
  <ul>
    {tasks.map(task =>
      <TaskItem
        key={task.id}
        {...task}
        onClick={() => toggleComplete(task.id, task.complete)}
        deleteTask={() => deleteTask(task.id)}
      />
    )}
  </ul>

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
}

export default TaskList

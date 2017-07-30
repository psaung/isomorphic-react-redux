import React from 'react'
import PropTypes from 'prop-types'

const TaskItem = ({ name, complete, onClick, deleteTask }) =>
  <li style={{ textDecoration: complete ? 'line-through' : 'none' }}>
    <span role="button" onClick={onClick} tabIndex="-1">{name}</span>
    <button onClick={deleteTask}>x</button>
  </li>

TaskItem.propTypes = {
  name: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}
export default TaskItem

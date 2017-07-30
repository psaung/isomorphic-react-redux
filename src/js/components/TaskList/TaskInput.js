import React from 'react'
import PropTypes from 'prop-types'

const TaskInput = ({ addTask }) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTask(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit" className="add-task">Add Task</button>
      </form>
    </div>
  )
}

TaskInput.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default TaskInput

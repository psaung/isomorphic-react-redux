import { extend, find } from 'lodash'
import uuid from 'uuid'

let tasks = [
  {
    id: uuid.v1(),
    name: 'Learn sketch screencast',
    complete: false,
  },
  {
    id: uuid.v1(),
    name: 'Code Review',
    complete: false,
  },
  {
    id: uuid.v1(),
    name: 'Create a commit',
    complete: false,
  },
]

const getTasks = () => tasks

const getTaskWithId = id => find(tasks, { id })

const addTask = task => {
  tasks.push(task)
}

const updateTask = (id, body) => {
  tasks = tasks.map(task => (task.id === id ? extend(task, body) : task))
  return find(tasks, { id })
}

const deleteTask = id => {
  tasks = tasks.filter(task => task.id !== id)
  return { message: 'success', id }
}

const count = () => tasks.length

module.exports = {
  getTasks,
  getTaskWithId,
  addTask,
  count,
  updateTask,
  deleteTask,
}

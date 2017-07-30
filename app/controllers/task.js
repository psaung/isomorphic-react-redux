import {
  getTasks,
  getTaskWithId,
  addTask,
  updateTask,
  deleteTask,
} from './../models/task'

exports.all = (req, res) => {
  res.json(getTasks())
}

exports.get = (req, res) => {
  res.json(getTaskWithId(req.params.task))
}

exports.create = (req, res) => {
  addTask(req.body)
  res.json(req.body)
}

exports.update = (req, res) => {
  const result = updateTask(req.params.task, req.body)
  res.json(result)
}

exports.delete = (req, res) => {
  const result = deleteTask(req.params.task)
  res.json(result)
}

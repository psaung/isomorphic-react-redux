import express from 'express'
import tasks from './../controllers/task'

const router = express.Router()

router.get('/tasks', tasks.all)
router.get('/tasks/:task', tasks.get)
router.post('/tasks', tasks.create)
router.put('/tasks/:task', tasks.update)
router.delete('/tasks/:task', tasks.delete)

module.exports = router

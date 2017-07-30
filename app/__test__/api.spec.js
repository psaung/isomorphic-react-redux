import request from 'supertest'
import expect from 'expect'
import uuid from 'uuid'

import app from './../index'
import { getTasks, count } from './../models/task'

describe('Test the api', () => {
  test('should respond all of the results from task model', done => {
    request(app)
      .get('/api/tasks')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, response) => {
        expect(response.body).toEqual(getTasks())
        done()
      })
  })

  test('should get a single resource if task id is specified', done => {
    const id = getTasks()[0].id
    const result = getTasks()[0]
    return request(app)
      .get(`/api/tasks/${id}`)
      .expect(200)
      .end((err, response) => {
        expect(response.body).toEqual(result)
        done()
      })
  })

  test('should create a new task', done => {
    const task = {
      id: uuid.v1(),
      name: 'New Task',
      complete: false,
    }
    const taskCounts = count()
    request(app)
      .post('/api/tasks')
      .send(task)
      .expect(200)
      .end((err, response) => {
        expect(response.body).toEqual(task)
        expect(count()).toEqual(taskCounts + 1)
        done()
      })
  })

  it('should delete a task', done => {
    const id = getTasks()[0].id
    const taskCounts = count()
    return request(app)
      .delete(`/api/tasks/${id}`)
      .expect(200)
      .end((err, response) => {
        expect(response.body.message).toEqual('success')
        expect(count()).toEqual(taskCounts - 1)
        done()
      })
  })

  it('should update a task', done => {
    const id = getTasks()[0].id
    const data = {
      name: 'Learn rxjs',
    }
    request(app)
      .put(`/api/tasks/${id}`)
      .send(data)
      .expect(200)
      .end((err, response) => {
        expect(response.body.name).toEqual(data.name)
        done()
      })
  })
})

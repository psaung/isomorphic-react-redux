import request from 'supertest'
import expect from 'expect'

import app from './../index'

describe('Test the root path', () => {
  test('should respond with welcome message', done => {
    request(app).get('/').expect(200).then(response => {
      expect(response.text).toEqual('welcome from api')
      done()
    })
  })
})

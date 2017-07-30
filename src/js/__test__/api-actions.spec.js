import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'

import * as actions from './../actions/api-actions'
import * as types from './../constants/api-types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions reducer', () => {
  afterEach(() => nock.cleanAll())

  it('should create API_GET_ALL when fetching tasks from api', () => {
    const body = [
      {
        id: 1,
        name: 'do something',
        complete: false,
      },
    ]
    nock('http://localhost:3000').get('/api/tasks').reply(200, body)
    const expectedActions = [
      { type: types.API_FETCHING, params: undefined, isFetching: true },
      { isFetching: false, type: types.API_SUCCESS, result: body },
    ]
    const store = mockStore({
      results: [],
      isFetching: false,
    })
    return store.dispatch(actions.getResource()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create API_POST when sending post request to api', () => {
    const body = { id: 3, name: 'do something', complete: false }
    nock('http://localhost:3000')
      .post('/api/tasks', () => JSON.stringify(body))
      .reply(200, body)
    const expectedActions = [
      { type: types.API_FETCHING, params: undefined, isFetching: true },
      { isFetching: false, type: types.API_SUCCESS, result: body },
    ]
    const store = mockStore({ results: [], isFetching: false })
    return store.dispatch(actions.addResource(body)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create API_PUT when sending put request to api', () => {
    const body = { id: 3, name: 'do something', complete: false }
    nock('http://localhost:3000')
      .put('/api/tasks/3', () => JSON.stringify(body))
      .reply(200, body)
    const expectedActions = [
      { type: types.API_FETCHING, params: undefined, isFetching: true },
      { isFetching: false, type: types.API_SUCCESS, result: body },
    ]
    const store = mockStore({ results: [], isFetching: false })
    return store.dispatch(actions.updateResource(body.id, body)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create API_DELETE when sending delete request to api', () => {
    const result = { message: 'success' }
    nock('http://localhost:3000').delete('/api/tasks/1').reply(200, result)
    const expectedActions = [
      { type: types.API_FETCHING, params: undefined, isFetching: true },
      { isFetching: false, type: types.API_DELETE_SUCCESS, result },
    ]
    const store = mockStore({ results: [], isFetching: false })
    return store.dispatch(actions.deleteResource(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

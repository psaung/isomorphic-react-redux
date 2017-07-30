import { Reducer } from 'redux-testkit'

import {
  API_GET_ALL,
  API_SUCCESS,
  API_FAIL,
} from './../constants/api-types'

import reducer from './../reducers/modules/api'

const initialState = {
  isFetching: false,
  result: [],
  success: {},
  error: {},
}

describe('api-reducer', () => {
  it('should have initial state', () => {
    expect(reducer()).toEqual(initialState)
  })

  it('should not affect state for unknown type', () => {
    const result = Reducer(reducer)
    result.expect({ type: 'NOT_EXISITING' }).toReturnState(initialState)
  })

  it('should response with isFetching to true in state when the API_GET_ALL action type is passed', () => {
    const action = { type: API_GET_ALL }
    Reducer(reducer)
      .expect(action)
      .toReturnState({ ...initialState, isFetching: true })
  })

  it('should response with error when API fetching is failed', () => {
    const message = 'Something went wrong with your request'
    const action = {
      type: API_FAIL,
      message,
    }
    Reducer(reducer)
      .expect(action)
      .toReturnState({ ...initialState, error: message })
  })

  it('should successfully response with result', () => {
    const data = ['aa']
    const action = {
      type: API_SUCCESS,
      result: data,
    }
    Reducer(reducer)
      .expect(action)
      .toReturnState({ ...initialState, result: data })
  })
})

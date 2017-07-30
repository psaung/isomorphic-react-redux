import _ from 'lodash'

import {
  API_GET_ALL,
  API_POST,
  API_PUT,
  API_DELETE,
  API_SUCCESS,
  API_DELETE_SUCCESS,
  API_FAIL,
} from './../../constants/api-types'

const initialState = {
  isFetching: false,
  result: [],
  success: {},
  error: {},
}

const merge = (arr1, arr2) =>
  _(arr1).concat(arr2).groupBy('id').map(_.spread(_.merge)).value()

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case API_GET_ALL:
      return {
        ...state,
        isFetching: true,
      }
    case API_POST:
      return {
        ...state,
        isFetching: true,
        data: action.data,
      }
    case API_PUT:
      return {
        ...state,
        isFetching: true,
        data: action.data,
      }
    case API_DELETE:
      return {
        ...state,
        isFetching: true,
        id: action.id,
      }
    case API_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      }
    case API_SUCCESS: {
      const result = action.result.length > 0 ? action.result : [action.result]
      return {
        ...state,
        isFetching: false,
        result: state.result.length > 0
          ? merge(state.result, result)
          : action.result,
      }
    }
    case API_DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: state.result.filter(v => v.id !== action.result.id),
      }
    default:
      return state
  }
}

export function getResource(url) {
  return {
    types: [API_GET_ALL, API_SUCCESS, API_FAIL],
    promise: client => client.get(url),
  }
}

export function createResource(url, data) {
  return {
    types: [API_POST, API_SUCCESS, API_FAIL],
    promise: client => client.post(url, data),
  }
}

export function updateResource(url, data) {
  return {
    types: [API_PUT, API_SUCCESS, API_FAIL],
    promise: client => client.put(url, data),
  }
}

export function deleteResource(url, id) {
  return {
    types: [API_DELETE, API_SUCCESS, API_FAIL],
    promise: client => client.delete(url, id),
  }
}

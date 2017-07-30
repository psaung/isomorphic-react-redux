import 'isomorphic-fetch'

import {
  API_FETCHING,
  API_SUCCESS,
  API_DELETE_SUCCESS,
  API_FAIL,
} from './../constants/api-types'

const apiHost = 'http://localhost:3000/api/'

function requestApi(params) {
  return {
    type: API_FETCHING,
    isFetching: true,
    params,
  }
}

function requestFailure(message) {
  return {
    type: API_FAIL,
    isFetching: false,
    message,
  }
}

function responseSuccess(result) {
  return {
    type: API_SUCCESS,
    isFetching: false,
    result,
  }
}

function deleteSuccess(result) {
  return {
    type: API_DELETE_SUCCESS,
    isFetching: false,
    result,
  }
}

export function getResource() {
  const config = {
    method: 'GET',
  }
  return dispatch => {
    dispatch(requestApi())
    return fetch(`${apiHost}tasks`, config)
      .then(response => response.json().then(result => ({ result, response })))
      .then(({ result, response }) => {
        if (!response.ok) {
          dispatch(requestFailure(result.message))
          Promise.reject(result)
        } else {
          dispatch(responseSuccess(result))
        }
        return result
      })
      .catch(err => dispatch(requestFailure(err)))
  }
}

export function addResource(body) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  return dispatch => {
    dispatch(requestApi())
    return fetch(`${apiHost}tasks`, config)
      .then(response => response.json().then(result => ({ result, response })))
      .then(({ result, response }) => {
        if (!response.ok) {
          dispatch(requestFailure(result.message))
          Promise.reject(result)
        } else {
          dispatch(responseSuccess(result))
        }
        return result
      })
      .catch(err => dispatch(requestFailure(err)))
  }
}

export function updateResource(id, body) {
  const config = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
  return dispatch => {
    dispatch(requestApi())
    return fetch(`${apiHost}tasks/${id}`, config)
      .then(response => response.json().then(result => ({ result, response })))
      .then(({ result, response }) => {
        if (!response.ok) {
          dispatch(requestFailure(result.message))
          Promise.reject(result)
        } else {
          dispatch(responseSuccess(result))
        }
        return result
      })
      .catch(err => dispatch(requestFailure(err)))
  }
}

export function deleteResource(id) {
  const config = {
    method: 'DELETE',
  }
  return dispatch => {
    dispatch(requestApi())
    return fetch(`${apiHost}tasks/${id}`, config)
      .then(response => response.json().then(result => ({ result, response })))
      .then(({ result, response }) => {
        if (!response.ok) {
          dispatch(requestFailure(result.message))
          Promise.reject(result)
        } else {
          dispatch(deleteSuccess(result))
        }
        return result
      })
      .catch(err => dispatch(requestFailure(err)))
  }
}

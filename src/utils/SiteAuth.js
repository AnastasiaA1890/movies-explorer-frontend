export const BASE_URL = 'https://api.anastasia.movies.nomoredomains.icu';

export const register = ({ name, email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email, 
      password
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else if (res.status === 400) {
      return Promise.reject('Error: one of the fields is incorrectly filled')
    } else {
      return Promise.reject(`Error: ${res.status}`)
    }
  })
}

export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else if (res.status === 400) {
      return Promise.reject('Error: one of the fields was not passed')
    } else if (res.status === 401) {
      return Promise.reject('Error: user with email not found')
    } else {
      return Promise.reject(`Error: ${res.status}`)
    }
  })
}

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else if (res.status === 400) {
      return Promise.reject('Error: Token not passed or passed in the wrong format')
    } else if (res.status === 401) {
      return Promise.reject('Error: Passed token is invalid')
    } else {
      return Promise.reject(`Error: ${res.status}`)
    }
  })
}
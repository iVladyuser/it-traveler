import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('/user/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/user/register', body)
}

export const logout = () => {
  clientFetch.get('/user/logout')
}

export const refresh = () => {
  clientFetch.get('/user/refresh')
}

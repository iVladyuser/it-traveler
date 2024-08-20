import { clientFetch } from '../clientFetch.js'

const BASE_PLACES_URL = '/points'

export const getFavoritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL)
}

export const addFavoritePlaces = (body) => {
  return clientFetch.post(BASE_PLACES_URL, body)
}

export const updateFavoritePlaces = (body) => {
  return clientFetch.put(BASE_PLACES_URL, body)
}

export const deleteFavoritePlaces = (id) => {
  return clientFetch.delete(BASE_PLACES_URL, id)
}

import { apikey, hash } from './config/config'
import { checkStatus, responseData, handleError } from './utils'
import agent from 'superagent'

const apiRoot = 'https://gateway.marvel.com/'
const perPage = 36 // characters and comics per page
const ts = 1 // time stamp
const charsEndpoint = `v1/public/characters`
const comicsEndpoint = `v1/public/comics`

const request = {
  get: (url, query) =>
    agent
      .get(apiRoot + url)
      .query({ ...query, ts, hash, apikey })
      .then(checkStatus)
      .then(responseData)
      .catch(handleError)
}

// fetch characters
export const Characters = {
  getAll: ({ page, isAscending }) =>
    request.get(charsEndpoint, {
      limit: perPage,
      orderBy: isAscending ? 'name' : '-name',
    }),
  byName: ({ page, isAscending, search }) =>
    request.get(charsEndpoint, {
      limit: perPage,
      orderBy: isAscending ? 'name' : '-name',
      nameStartsWith: search
    })
}

// fetch comics
export const Comics = {
  getAll: ({ page, isAscending }) =>
    request.get(comicsEndpoint, {
      limit: perPage,
      orderBy: isAscending ? 'title' : '-title'
    }),
  byTitle: ({ page, isAscending, search }) =>
    request.get(comicsEndpoint, {
      limit: perPage,
      orderBy: isAscending ? 'title' : '-title'
    }),
  byCharacter: ({ page, isAscending, charId }) =>
    request.get(`v1/public/characters/${charId}/comics`, { limit: 10 })
}

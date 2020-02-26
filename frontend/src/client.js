import { checkStatus, responseData, handleError } from './utils'
import agent from 'superagent'

export const perPage = 36 // characters and comics per page
const apiRoot = 'https://gateway.marvel.com/'
const charsEndpoint = `v1/public/characters`
const comicsEndpoint = `v1/public/comics`

const authParams = {
  ts: 1,
  hash: process.env.GATSBY_MD5_HASH,
  apikey: process.env.GATSBY_API_KEY
}

const request = {
  get: (url, query) =>
    agent
      .get(apiRoot + url)
      .query({ ...query, ...authParams })
      .then(checkStatus)
      .then(responseData)
      .catch(handleError)
}

// fetch characters
export const Characters = {
  getAll: ({ page, isAscending }) =>
    request.get(charsEndpoint, {
      limit: perPage,
      offset: (page - 1) * perPage,
      orderBy: isAscending ? 'name' : '-name'
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

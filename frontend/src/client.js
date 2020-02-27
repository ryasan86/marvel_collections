import { checkStatus, responseData, handleError } from './utils'
import agent from 'superagent'

export const limit = 35 // how many items to show per page
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

const offset = (page, perPage) => (page - 1) * perPage || 0

// fetch characters
export const Characters = {
  getAll: ({ page, orderBy }) =>
    request.get(charsEndpoint, {
      limit: limit,
      orderBy: orderBy,
      offset: offset(page, limit)
    }),
  byName: ({ page, orderBy, search }) =>
    request.get(charsEndpoint, {
      limit: limit,
      orderBy: orderBy,
      nameStartsWith: search,
      offset: offset(page, limit)
    })
}

// fetch comics
export const Comics = {
  getAll: ({ page, orderBy }) =>
    request.get(comicsEndpoint, {
      limit: limit,
      orderBy: orderBy,
      offset: offset(page, limit)
    }),
  byTitle: ({ page, orderBy, search }) =>
    request.get(comicsEndpoint, {
      limit: limit,
      orderBy: orderBy,
      titleStartsWith: search,
      offset: offset(page, limit)
    }),
  byCharacter: ({ page, orderBy, charId }) =>
    request.get(`v1/public/characters/${charId}/comics`, {
      limit: 12,
      orderBy: orderBy,
      offset: offset(page, 12)
    })
}

import { publicKey, md5 } from './config/config'
import { checkStatus, parseJSON, handleError } from './utils'

const apiRoot = 'https://gateway.marvel.com/'
const limit = 36
const charsEndpoint = `v1/public/characters?ts=1&hash=${md5}&apikey=${publicKey}`
const comicsEndpoint = `v1/public/comics?ts=1&hash=${md5}&apikey=${publicKey}`

const requests = {
  get: url =>
    fetch(apiRoot + url)
      .then(checkStatus)
      .then(parseJSON)
      .catch(handleError)
}

export const Characters = {
  getAll: (page, isAscending) =>
    requests.get(`${charsEndpoint}&limit=${limit}&orderBy=${isAscending ? '' : '-'}name`),
  byName: (page, isAscending, search) =>
    requests.get(`${charsEndpoint}&limit=${limit}&orderBy=${isAscending ? '' : '-'}name&nameStartsWith=${search}`)
}

export const Comics = {
  getAll: (page, isAscending) =>
    requests.get(`${comicsEndpoint}&limit=${limit}&orderBy=${isAscending ? '' : '-'}title`),
  byCharacter: (page, isAscending, charId) =>
    requests.get(`v1/public/characters/${charId}/comics?hash=${md5}&apikey=${publicKey}&ts=1&limit=10`)
}
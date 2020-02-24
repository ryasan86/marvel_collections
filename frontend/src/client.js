import { API_ROOT, LIMIT, CHARS_ENDPOINT } from './constants'
import { publicKey, md5 } from './config/config'
import { checkStatus, parseJSON, handleError } from './utils'

const requests = {
  get: url =>
    fetch(API_ROOT + url)
      .then(checkStatus)
      .then(parseJSON)
      .catch(handleError)
}

const queries =  {
  characters: CHARS_ENDPOINT + `?ts=1&limit=${LIMIT}&hash=${md5}&apikey=${publicKey}`
}

export const Characters = {
  getAll: async (page, isAscending) =>
    requests.get(`${queries.characters}&orderBy=${isAscending ? '' : '-'}name`),
  byName: async (page, isAscending, search) =>
    requests.get(`${queries.characters}&orderBy=${isAscending ? '' : '-'}name&nameStartsWith=${search}`)
}

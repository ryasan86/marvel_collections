import { baseUrl } from './constants'
import { publicKey, md5 } from './config/config'
import { checkStatus } from './utils/checkStatus'
import { parseJSON } from './utils/parseJSON'

export const Characters = {
  getAll: async (page, isAscending, search) => {
    const queryStr = [
      `?ts=1`,
      `limit=36`,
      `hash=${md5}`,
      `apikey=${publicKey}`,
      `orderBy=${isAscending ? '' : '-'}name`,
      search ? `nameStartsWith=${search}` : ''
    ].join('&')

    return fetch(baseUrl + `v1/public/characters` + queryStr)
      .then(checkStatus)
      .then(parseJSON)
      .catch(err => console.error(err))
  }
}

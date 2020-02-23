import { baseUrl } from './constants'
import { publicKey, md5 } from './config/config'
import { checkStatus } from './utils/checkStatus'
import { parseJSON } from './utils/parseJSON'

export const getAllCharacters = async () => {
  const queryStr = [`?ts=1`, `limit=36`, `apikey=${publicKey}`, `hash=${md5}`].join('&')
  return fetch(baseUrl + `v1/public/characters` + queryStr)
    .then(checkStatus)
    .then(parseJSON)
    .catch(err => console.error(err))
}

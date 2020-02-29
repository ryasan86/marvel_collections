import agent from 'superagent'
import utils from '../utils/index.js'

const { checkStatus, responseData, handleError, offset, createEdges } = utils
const apiRoot = 'https://gateway.marvel.com/'
const charsEndpoint = 'v1/public/characters'
const comicsEndpoint = 'v1/public/comics'
const limit = 36

const request = {
  get: (url, query) =>
    agent
      .get(apiRoot + url)
      .query({ ...query, ...authParams })
      .then(checkStatus)
      .then(responseData)
      .catch(handleError)
}

const authParams = {
  ts: 1,
  hash: process.env.MARVEL_MD5_HASH,
  apikey: process.env.MARVEL_API_KEY
}

// const Characters = {
//   getAll: ({ page, orderBy }) =>
//     request.get(charsEndpoint, {
//       limit: limit,
//       orderBy: orderBy,
//       offset: offset(page, limit)
//     }),
//   byName: ({ page, orderBy, search }) =>
//     request.get(charsEndpoint, {
//       limit: limit,
//       orderBy: orderBy,
//       nameStartsWith: search,
//       offset: offset(page, limit)
//     })
// }

const Query = {
  characters: async (parent, args, ctx, info) =>
    request
      .get(charsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(({ total, results }) => ({
        totalCount: total,
        edges: createEdges(results)
      })),
  character: () => ({ id: 1, name: 'Bob' })
}

export default Query

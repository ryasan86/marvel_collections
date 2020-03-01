const agent = require('superagent')
const { checkStatus, responseData, handleError } = require('../utils.js')
const { apiRoot, charsEndpoint, limit } = require('../constants.js')

const offset = (page, perPage) => (page - 1) * perPage || 0

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

const sendConnection = ({ total, results }) => {
  return {
    totalCount: total,
    edges: results.map(node => ({
      node: {
        ...node,
        creators: node.creators ? node.creators.items : null,
        thumbnail: `${node.thumbnail.path}/portrait_incredible.${node.thumbnail.extension}`
      }
    }))
  }
}

const Query = {
  characters: async (parent, args, ctx, info) =>
    request
      .get(charsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),
  character: () => ({ id: 1, name: 'Bob' })
}

module.exports = Query

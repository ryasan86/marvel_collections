const agent = require('superagent')
const { checkStatus, responseData, handleError } = require('../utils.js')
const {
  marvelApiRoot,
  marvelCharsEndpoint,
  marvelComicsEndpoint,
  limit
} = require('../constants.js')

const offset = (page, perPage) => (page - 1) * perPage || 0

const authParams = {
  ts: 1,
  hash: process.env.MARVEL_MD5_HASH,
  apikey: process.env.MARVEL_API_KEY
}

const request = {
  get: (url, query) =>
    agent
      .get(marvelApiRoot + url)
      .query({ ...query, ...authParams })
      .then(checkStatus)
      .then(responseData)
      .catch(handleError)
}

const sendConnection = ({ total, results }) => ({
  totalCount: total,
  edges: results.map(node => ({
    node: {
      ...node,
      creators: node.creators ? node.creators.items : null,
      thumbnail: `${node.thumbnail.path}/portrait_incredible.${node.thumbnail.extension}`
    }
  }))
})

const Query = {
  characters: (parent, args) =>
    request
      .get(marvelCharsEndpoint, {
        limit: args.limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  characterNameStartsWith: (parent, args) =>
    request
      .get(marvelCharsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        nameStartsWith: args.search,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  comics: (parent, args) =>
    request
      .get(marvelComicsEndpoint, {
        limit: args.limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  comicTitleStartsWith: (parent, args) =>
    request
      .get(marvelComicsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        titleStartsWith: args.search,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  comicsByCharacter: (parent, args) =>
    request
      .get(`v1/public/characters/${args.charId}/comics`, {
        limit: 10,
        orderBy: args.orderBy,
        offset: offset(args.page, 10)
      })
      .then(sendConnection)
      .catch(handleError)
}

module.exports = Query

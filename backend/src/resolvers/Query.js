const agent = require('superagent')
const {
  checkStatus,
  responseData,
  handleError,
  getRandomInt
} = require('../utils.js')
const {
  marvelApiRoot,
  marvelCharsEndpoint,
  marvelComicsEndpoint,
  comicVineRoot,
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
  characters: (parent, args, ctx, info) =>
    request
      .get(marvelCharsEndpoint, {
        limit: args.limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  characterNameStartsWith: (parent, args, ctx, info) =>
    request
      .get(marvelCharsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        nameStartsWith: args.search,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  comics: (parent, args, ctx, info) =>
    request
      .get(marvelComicsEndpoint, {
        limit: args.limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  comicTitleStartsWith: (parent, args, ctx, info) =>
    request
      .get(marvelComicsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        titleStartsWith: args.search,
        offset: offset(args.page, limit)
      })
      .then(sendConnection)
      .catch(handleError),

  comicsByCharacter: (parent, args, ctx, info) =>
    request
      .get(`v1/public/characters/${args.charId}/comics`, {
        limit: 10,
        orderBy: args.orderBy,
        offset: offset(args.page, 10)
      })
      .then(sendConnection)
      .catch(handleError),

  randomComicVineCharacter: () =>
    agent
      .get(comicVineRoot + 'characters')
      .query({
        api_key: process.env.COMIC_VINE_API_KEY,
        offset: getRandomInt(0, 13000),
        format: 'json',
        limit: 1,
        field_list: 'api_detail_url'
      })
      .then(checkStatus)
      .then(getApiDetailUrl)
      .then(redoComicVineCharacterData)
      .catch(handleError)
}

const getApiDetailUrl = res => {
  const apiDetailUrl = res.body.results[0].api_detail_url
  return agent
    .get(apiDetailUrl, {
      api_key: process.env.COMIC_VINE_API_KEY,
      format: 'json'
    })
    .then(checkStatus)
    .catch(handleError)
}

const redoComicVineCharacterData = res => {
  console.log(res.body)
  // console.log(data)
  // const [character] = res.body.results
  // const {
  //   image,
  //   first_appeared_in_issue: firstAppearedInIssue,
  //   publisher
  // } = character
  // return {
  //   ...character,
  //   image: image.super_url,
  //   publisher: publisher.name,
  //   first_appeared_in_issue: firstAppearedInIssue.name
  // }
}

module.exports = Query

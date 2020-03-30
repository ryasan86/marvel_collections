const agent = require('superagent')
const Fuse = require('fuse.js')
const { marvelApiRoot } = require('./constants.js')

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`)
    error.status = response.statusText
    error.response = response
    console.error(error)
    throw error
  }
}

const handleError = err => {
  return console.error('Something went wrong: ', err)
}

const responseData = res => {
  return res.body.data
}

const marvelAuth = {
  ts: 1,
  hash: process.env.MARVEL_MD5_HASH,
  apikey: process.env.MARVEL_API_KEY
}

const request = {
  get: (url, query) =>
    agent
      .get(marvelApiRoot + url)
      .query({ ...query, ...marvelAuth })
      .then(checkStatus)
      .then(responseData)
}

const offset = (page, perPage) => (page - 1) * perPage || 0

const sendMarvelInfo = ({ total, results }) => ({
  totalCount: total,
  edges: results.map(node => ({
    node: {
      ...node,
      creators: node.creators ? node.creators.items : null,
      thumbnail: `${node.thumbnail.path}/portrait_incredible.${node.thumbnail.extension}`
    }
  }))
})

const getFuzzyMatches = async ({ items, matchMe }) => {
  const fuse = new Fuse(await items, {
    keys: ['title'],
    findAllMatches: true,
    includeScore: true
  })
  const edges = fuse.search(matchMe).map(fuzzy => ({ node: fuzzy.item }))

  return { edges, totalCount: edges.length }
}

// prettier-ignore
const stopWords = [
  'a', 'also', 'an', 'and', 'any', 'are', 'as',
  'at', 'be', 'because', 'been', 'but', 'by', 'for',
  'from', 'in', 'into', 'is', 'of', 'on', 'or', 'so',
  'some', 'such', 'the', 'was', 'were', 'with'
]

const optimizeTerm = str => {
  const deleteCommon = new RegExp(`\\b(${stopWords.join('|')})\\b`, 'gi')
  const deleteSpecials = /[^a-z0-9]/gi
  const trimWhiteSpace = /\s+/g

  return str
    .replace(deleteSpecials, ' ')
    .replace(deleteCommon, ' ')
    .replace(trimWhiteSpace, ' ')
    .trim()
    .toLowerCase()
}

const parseSLD = url => {
  return url.replace(/(https|http):\/\/.+\.(.+)\..+/, '$2')
}

module.exports = {
  checkStatus,
  handleError,
  responseData,
  sendMarvelInfo,
  offset,
  getFuzzyMatches,
  optimizeTerm,
  request,
  parseSLD
}

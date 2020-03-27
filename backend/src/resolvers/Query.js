const {
  handleError,
  sendMarvelInfo,
  getFuzzyMatches,
  offset,
  request
} = require('../utils.js')
const {
  marvelCharsEndpoint,
  marvelComicsEndpoint,
  limit
} = require('../constants.js')
const { shop } = require('../scrapers.js')

const store = {
  marvel: 'https://comicstore.marvel.com/search',
  comixology: 'https://www.comixology.com/search'
}

const Query = {
  characters: (parent, args) =>
    request
      .get(marvelCharsEndpoint, {
        limit: args.limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendMarvelInfo)
      .catch(handleError),

  character: (parent, args) =>
    request
      .get(`${marvelCharsEndpoint}/${args.id}`)
      .then(sendMarvelInfo)
      .catch(handleError),

  characterNameStartsWith: (parent, args) =>
    request
      .get(marvelCharsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        nameStartsWith: args.search,
        offset: offset(args.page, limit)
      })
      .then(sendMarvelInfo)
      .catch(handleError),

  comics: (parent, args) =>
    request
      .get(marvelComicsEndpoint, {
        limit: args.limit,
        orderBy: args.orderBy,
        offset: offset(args.page, limit)
      })
      .then(sendMarvelInfo)
      .catch(handleError),

  comic: (parent, args) =>
    request
      .get(`${marvelComicsEndpoint}/${args.id}`)
      .then(sendMarvelInfo)
      .catch(handleError),

  comicTitleStartsWith: (parent, args) =>
    request
      .get(marvelComicsEndpoint, {
        limit: limit,
        orderBy: args.orderBy,
        titleStartsWith: args.search,
        offset: offset(args.page, limit)
      })
      .then(sendMarvelInfo)
      .catch(handleError),

  comicsByCharacter: (parent, args) =>
    request
      .get(`v1/public/characters/${args.charId}/comics`, {
        limit: 10,
        orderBy: args.orderBy,
        offset: offset(args.page, 10)
      })
      .then(sendMarvelInfo)
      .catch(handleError),

  shopForComic: async (parent, { title }) =>
    getFuzzyMatches({
      items: [
        await shop({ title, store: store.marvel }),
        await shop({ title, store: store.comixology })
      ].flat(),
      matchMe: title
    })
}

module.exports = Query

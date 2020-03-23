const agent = require('superagent')
const puppeteer = require('puppeteer')
const { checkStatus, responseData, handleError } = require('../utils.js')
const {
  marvelApiRoot,
  marvelCharsEndpoint,
  marvelComicsEndpoint,
  limit
} = require('../constants.js')

// scrapers for comic vendor websites
const scrapers = {
  comixology: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    // 1. visit comixology
    await page.goto('https://www.comixology.com/search')
    // 2. look for comic in search input
    await page.type('[name=search]', _title)
    // 3. simulate submit
    await page.keyboard.press('Enter')
    // 4. wait for results to render
    await page.waitForSelector('.topResults', { visible: true })
    // 5. select the first item in search results
    await page.click('.topResults a')
    // 6. give page 5 seconds to load
    await page.waitFor(5000)

    // scrape title, price, and img source of first search result
    const { title, price, imgSrc } = await page.evaluate(() => {
      const title = document.querySelector('.title').textContent
      const price = document.querySelector('.item-price').textContent
      const imgSrc = document.querySelector('img.cover').src

      return { title, price, imgSrc }
    })

    await browser.close()

    return { title, price, imgSrc }
  },
  amazon: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // 1. visit amazon
    await page.goto('https://www.amazon.com')
    // 2. look for comic in search input
    await page.type('[name=field-keywords]', _title)
    // 3. simulate submit
    await page.keyboard.press('Enter')
    // 4. wait for results to render
    await page.waitForSelector('.s-search-results', { visible: true })
    // 5. select the first item in search results
    await page.click('.s-result-list a')
    // 6. give page 5 seconds to load
    await page.waitFor(5000)

    // // await page.screenshot({ path: 'amazon.png' })
    // // scrape title, price, and img source of first search result
    const { title, price, imgSrc } = await page.evaluate(() => {
      // const title = document.querySelector('#title span').textContent
      // const price = document.querySelector('span.a-color-price').textContent
      // const imgSrc = document.querySelector('#ebooksImgBlkFront').src

      return { title: 'test', price: '123123', imgSrc: 'something.png' }
    })

    console.log(title, price, imgSrc)

    await browser.close()

    return { title: 'test', price: '19.99', imgSrc: 'image.png' }
  }
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

// authorization for Marvel API
const authParams = {
  ts: 1,
  hash: process.env.MARVEL_MD5_HASH,
  apikey: process.env.MARVEL_API_KEY
}

// send collection of items with total count info
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

const offset = (page, perPage) => (page - 1) * perPage || 0

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
      .catch(handleError),

  shopForComic: (parent, args) => scrapers.amazon(args.title)
}

module.exports = Query

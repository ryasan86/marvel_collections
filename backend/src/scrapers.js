const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const { optimizeTerm, handleError, parseSLD } = require('./utils.js')

// scrapers for comic vendor websites
const scrapers = {
  shop: async ({ store, title }) => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    // navigate to vendor site
    await page.goto(store)
    // search for comic book
    await page.type('[name=search]', optimizeTerm(title))

    await page.keyboard.press('Enter')
    // find comic in search results
    const resultsFound = await page
      .waitForSelector('.topResults', { visible: true })
      .catch(handleError)
    // get list of urls to comic details page
    if (resultsFound) {
      const urls = await page.evaluate(() => {
        const topResults = document.querySelector('.topResults')
        const contentItems = topResults.querySelectorAll('.content-item')
        const itemsWithPrice = [...contentItems].filter(item => {
          return item
            .querySelector('.content-cover')
            .hasAttribute('data-item-actions-data')
        })
        const _urls = itemsWithPrice.map(item => {
          return item.querySelector('.content-img-link').href
        })

        return _urls
      })
      // go to each url and collect fields
      const requests = urls.map(async (comicUrl, i) => {
        const res = await fetch(comicUrl)
        const html = await res.text()
        const $ = cheerio.load(html)
        const getMetaTag = name => {
          return (
            $(`meta[name="${name}"]`).attr('content') ||
            $(`meta[property="og:${name}"]`).attr('content') ||
            $(`meta[property="twitter:${name}"]`).attr('content')
          )
        }

        return {
          url: comicUrl,
          vendor: parseSLD(store),
          description: getMetaTag('description'),
          image: getMetaTag('image'),
          favicon: $('link[rel="shortcut icon"]').attr('href'),
          price: $('.detail-content .item-price').first().text(), // prettier-ignore
          title: $('title').first().text() // prettier-ignore
        }
      })
      await browser.close()
      const items = await Promise.all(requests).catch(handleError)

      return items
    }

    return []
  }
}

module.exports = scrapers

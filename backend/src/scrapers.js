const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const { optimizeTerm, handleError } = require('./utils.js')

// scrapers for comic vendor websites
const scrapers = {
  comixology: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.comixology.com/search')

    await page.type('[name=search]', optimizeTerm(_title))
    await page.keyboard.press('Enter')

    const resultsFound = await page
      .waitForSelector('.topResults', {
        timeout: 10000,
        visible: true
      })
      .catch(handleError)

    if (resultsFound) {
      const productUrls = await page.evaluate(() => {
        const listContainer = document.querySelector('.topResults')
        const contentItems = listContainer.querySelectorAll('.content-item')
        const itemsWithPrice = [...contentItems].filter(c => {
          return c
            .querySelector('.content-cover')
            .hasAttribute('data-item-actions-data')
        })
        const urls = itemsWithPrice.map(c => {
          return c.querySelector('.content-img-link').href
        })

        return urls
      })

      const requests = productUrls.map(async (url, i) => {
        const res = await fetch(url)
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
          url,
          vendor: 'comixology',
          description: getMetaTag('description'),
          image: getMetaTag('image'),
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

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
      .waitForSelector('.topResults', { visible: true })
      .catch(handleError)

    if (resultsFound) {
      const comicUrls = await page.evaluate(() => {
        const topResults = document.querySelector('.topResults')
        const contentItems = topResults.querySelectorAll('.content-item')
        const itemsWithPrice = [...contentItems].filter(item => {
          return item
            .querySelector('.content-cover')
            .hasAttribute('data-item-actions-data')
        })
        const urls = itemsWithPrice.map(item => {
          return item.querySelector('.content-img-link').href
        })

        return urls
      })

      const requests = comicUrls.map(async (comicUrl, i) => {
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

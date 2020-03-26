const puppeteer = require('puppeteer')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const { optimizeTerm } = require('./utils.js')

// scrapers for comic vendor websites
const scrapers = {
  comixology: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // navigate to comic details page
    await page.goto('https://www.comixology.com/search')

    await page.type('[name=search]', optimizeTerm(_title))

    await page.keyboard.press('Enter')

    await page.waitForSelector('.topResults', { visible: true })

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
        vendor: 'comixology',
        description: getMetaTag('description'),
        image: getMetaTag('image'),
        price: $('.detail-content .item-price').text(),
        title: $('title').text(),
        url
      }
    })

    const items = await Promise.all(requests)

    await browser.close()

    return items
  },
  amazon: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // navigate to comic details page
    await page.goto(
      'https://www.amazon.com/Comics-Graphic-Novels-Books/b?ie=UTF8&node=4366'
    )

    await page.type('#twotabsearchtextbox', optimizeTerm(_title))

    await page.keyboard.press('Enter')

    await page.waitForSelector('.s-result-item', { visible: true })

    await page.screenshot({ path: 'amazon.png' })

    const url = await page.evaluate(() => {
      const noResults = document
        .querySelector('span[data-component-type="s-top-banner"]')
        .textContent.includes('No results')
      if (noResults) {
        return ''
      }
      const [first, second] = document.querySelectorAll('.s-result-item')
      const firstIsAd = first.classList.contains('AdHolder')
      const firstUrl = first.querySelector('a').href
      const secondUrl = second.querySelector('a').href
      return firstIsAd ? secondUrl : firstUrl
    })

    if (url) {
      page.goto(url)

      await page.waitFor(5000)

      // scrape title, price, and img source of first search result
      const { vendor, title, price, image, description } = await page.evaluate(
        () => {
          const $ = document.querySelector.bind(document)

          const getMetaTag = name => {
            return (
              $(`meta[name="${name}"]`).content ||
              $(`meta[property="og:${name}"]`).content ||
              $(`meta[property="twitter:${name}"]`).content
            )
          }

          return {
            vendor: 'amazon',
            title: $('title').textContent,
            image: $('.a-dynamic-image').src,
            price: $('span.a-color-price').textContent.trim(),
            description: getMetaTag('description')
          }
        }
      )

      await browser.close()

      return { vendor, title, price, image, description, url }
    }

    return {}
  }
}

module.exports = scrapers

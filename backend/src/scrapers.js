const puppeteer = require('puppeteer')

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
    await page.waitForSelector('.topResults a', { visible: true })
    // 5. select the first item in search results
    await page.click('.topResults a')
    // 6. give page 5 seconds to load
    await page.waitFor(5000)

    // scrape title, price, and img source of first search result
    const { title, price, image, description, url } = await page.evaluate(
      () => {
        const $ = document.querySelector.bind(document)
        const getMetaTag = name => {
          return (
            $(`meta[name=${name}]`).content ||
            $(`meta[property=og:${name}]`).content ||
            $(`meta[property=twitter:${name}]`).content
          )
        }

        return {
          title: $('title').textContent,
          price: $('.item-price').textContent,
          description: getMetaTag('description'),
          image: getMetaTag('image'),
          url: getMetaTag('url')
        }
      }
    )

    await browser.close()

    return { title, price, image, description, url }
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
    await page.waitForSelector('.s-result-list a', { visible: true })
    // 5. select the first item in search results
    await page.click('.s-result-list a')
    // 6. wait for page to load product details
    await page.waitFor(5000)

    // scrape title, price, and img source of first search result
    const { title, price, image, description, url } = await page.evaluate(
      () => {
        const $ = document.querySelector.bind(document)
        const getMetaTag = name => {
          return (
            $(`meta[name=${name}]`).content ||
            $(`meta[property=og:${name}]`).content ||
            $(`meta[property=twitter:${name}]`).content
          )
        }

        return {
          title: $('title').textContent,
          image: $('.frontImage').src,
          url: $('link[rel=canonical]').href,
          price: $('span.a-color-price').textContent.trim(),
          description: getMetaTag('description')
        }
      }
    )

    await browser.close()

    return { title, price, image, description, url }
  }
}

module.exports = scrapers

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

      return { title: title.trim(), price: price.trim(), imgSrc }
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
    await page.click('.s-search-results a')
    // 6. wait for page to load product details
    await page.waitForSelector('#dp-container', { visible: true })

    // scrape title, price, and img source of first search result
    const { title, price, imgSrc } = await page.evaluate(() => {
      const title = document.querySelector('#title span').textContent
      const price = document.querySelector('span.a-color-price').textContent
      const imgSrc = document.querySelector('#ebooksImgBlkFront').src

      return { title: title.trim(), price: price.trim(), imgSrc }
    })

    await browser.close()

    return { title, price, imgSrc }
  }
}

module.exports = scrapers

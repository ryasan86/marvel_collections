const puppeteer = require('puppeteer')

const scrapers = {
  comixology: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.comixology.com/search')

    await page.type('[name=search]', _title)

    await page.keyboard.press('Enter')

    await page.waitForSelector('.topResults', { visible: true })

    await page.click('.topResults a')

    const { title, price, imgSrc } = await page.evaluate(() => {
      const title = document.querySelector('.title').textContent
      const price = document.querySelector('.item-price').textContent
      const imgSrc = document.querySelector('img.cover').src

      return { title, price, imgSrc }
    })

    await browser.close()

    return { title, price, imgSrc }
  }
}

module.exports = scrapers

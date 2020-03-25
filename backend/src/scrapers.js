const puppeteer = require('puppeteer')

// scrapers for comic vendor websites
const scrapers = {
  comixology: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // navigate to comic details page
    await page.goto('https://www.comixology.com/search')

    await page.type('[name=search]', _title)

    await page.keyboard.press('Enter')

    await page.waitForSelector('.topResults a', { visible: true })

    await page.click('.topResults a')

    await page.waitFor(5000)

    // scrape title, price, and img source of first search result
    const {
      vendor,
      title,
      price,
      image,
      description,
      url
    } = await page.evaluate(() => {
      const $ = document.querySelector.bind(document)

      const getMetaTag = name => {
        return (
          $(`meta[name="${name}"]`).content ||
          $(`meta[property="og:${name}"]`).content ||
          $(`meta[property="twitter:${name}"]`).content
        )
      }

      return {
        vendor: 'comixology',
        title: $('title').textContent,
        price: $('.item-price').textContent,
        description: getMetaTag('description'),
        image: getMetaTag('image'),
        url: getMetaTag('url')
      }
    })

    await browser.close()

    return { vendor, title, price, image, description, url }
  },
  amazon: async _title => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // navigate to comic details page
    await page.goto(
      'https://www.amazon.com/Comics-Graphic-Novels-Books/b?ie=UTF8&node=4366'
    )

    await page.type('[name=field-keywords]', _title)

    await page.keyboard.press('Enter')

    await page.waitForSelector('.s-result-list a', { visible: true })

    await page.click('.s-result-list a')

    await page.waitFor(5000)

    await page.screenshot({ path: 'amazon.png' })
    // scrape title, price, and img source of first search result
    const {
      vendor,
      title,
      price,
      image,
      description,
      url
    } = await page.evaluate(() => {
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
        image: $('.image-2d img').src,
        url: $('link[rel=canonical]').href,
        price: $('span.a-color-price').textContent.trim(),
        description: getMetaTag('description')
      }
    })

    await browser.close()

    return { vendor, title, price, image, description, url }
  }
}

module.exports = scrapers

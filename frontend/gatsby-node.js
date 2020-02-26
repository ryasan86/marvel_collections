const path = require('path')

// dynamic routing like /characters/spider-man, /characters/thanos, etc
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  switch (page.path) {
    case '/characters/':
      return createPage({
        path: '/characters',
        matchPath: '/characters/*',
        component: path.resolve('src/pages/characters.js')
      })
    case '/comics/':
      return createPage({
        path: '/comics',
        matchPath: '/comics/*',
        component: path.resolve('src/pages/comics.js')
      })
  }
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/characters/)) {
    createPage({
      path: '/characters',
      matchPath: '/characters/*',
      component: path.resolve('src/pages/characters.js')
    })
  }
}

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../styles/FooterStyles'

const FooterComponent = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            repo_url
          }
        }
      }
    `
  )

  return (
    <Footer>
      <Footer.MaxWidth>
        <div>*not official Marvel site &nbsp;</div>
        <div>© {new Date().getFullYear()}&nbsp;</div>
        <Footer.A
          href={site.siteMetadata.repo_url}
          target="_blank"
          rel="noopener noreferrer">
          github repo
        </Footer.A>
      </Footer.MaxWidth>
    </Footer>
  )
}

export default FooterComponent

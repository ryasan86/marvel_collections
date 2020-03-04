import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
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
    <footer className="footer">
      <div className="max-width">
        <div>© {new Date().getFullYear()}&nbsp;</div>
        <a
          href={site.siteMetadata.repo_url}
          target="_blank"
          rel="noopener noreferrer">
          github repo
        </a>
      </div>
    </footer>
  )
}

export default Footer

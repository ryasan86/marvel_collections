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
    <div className='footer'>
      <div>
        © {new Date().getFullYear()}
        {` `}
        <a
          href={site.siteMetadata.repo_url}
          target='_blank'
          rel='noopener noreferrer'>
          GITHUB REPO
        </a>
      </div>
    </div>
  )
}

export default Footer

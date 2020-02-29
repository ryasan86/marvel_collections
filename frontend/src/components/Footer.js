import React from 'react'
import StyledFooter from '../styles/FooterStyles'
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
    <StyledFooter>
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
    </StyledFooter>
  )
}

export default Footer

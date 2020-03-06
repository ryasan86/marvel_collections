import React from 'react'
import Footer from '../styles/FooterStyles'
import { useSiteMetadata } from '../graphql/SiteMetadataHook'

const FooterComponent = () => {
  const { repoUrl } = useSiteMetadata()

  return (
    <Footer>
      <Footer.MaxWidth>
        <div>*not official Marvel site &nbsp;</div>
        <div>© {new Date().getFullYear()}&nbsp;</div>
        <Footer.A href={repoUrl} target="_blank" rel="noopener noreferrer">
          github repo
        </Footer.A>
      </Footer.MaxWidth>
    </Footer>
  )
}

export default FooterComponent

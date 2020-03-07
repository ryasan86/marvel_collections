import React from 'react'
import Footer from '../styles/FooterStyles'
import { repoUrl, marvelUrl } from '../constants'

const FooterComponent = () => (
  <Footer>
    <Footer.MaxWidth>
      <div>
        Data Sources: <a href={marvelUrl}>Marvel</a>&nbsp;
      </div>
      <div>© {new Date().getFullYear()}&nbsp;</div>
      <a href={repoUrl}>repo</a>
    </Footer.MaxWidth>
  </Footer>
)

export default FooterComponent

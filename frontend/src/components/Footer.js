import React from 'react'
import Footer from '../styles/FooterStyles'
import { repoUrl } from '../constants'

const FooterComponent = () => (
  <Footer>
    <Footer.MaxWidth>
      <div>*not official Marvel site &nbsp;</div>
      <div>© {new Date().getFullYear()}&nbsp;</div>
      <Footer.A href={repoUrl}>repo</Footer.A>
    </Footer.MaxWidth>
  </Footer>
)

export default FooterComponent

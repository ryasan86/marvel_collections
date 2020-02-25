import React from 'react'
import StyledFooter from '../styles/FooterStyles'

const Footer = () => (
  <StyledFooter>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>
    </div>
  </StyledFooter>
)

export default Footer

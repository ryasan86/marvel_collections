import React from 'react'
import { Link } from 'gatsby'
import Header from '../styles/HeaderStyles'
import { MarvelSVG } from '../images'

const activeStyle = {
  color: 'white'
}

const HeaderComponent = () => (
  <Header>
    <Header.NavItem className='logo'>
      <Link to="/">
        <img src={MarvelSVG} alt="marvel" />
      </Link>
    </Header.NavItem>
    <Header.NavItem>
      <Link to="/characters" activeStyle={activeStyle}>
        CHARACTERS
      </Link>
    </Header.NavItem>
    <Header.NavItem>
      <Link to="/comics" activeStyle={activeStyle}>
        COMICS
      </Link>
    </Header.NavItem>
  </Header>
)

export default HeaderComponent

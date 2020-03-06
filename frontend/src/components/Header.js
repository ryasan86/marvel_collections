import React from 'react'
import Header from '../styles/HeaderStyles'
import { MarvelSVG } from '../images'

const activeStyle = {
  color: 'white'
}

const HeaderComponent = () => (
  <Header>
    <Header.NavItem className="login">
      <Header.Link to="/signin" activeStyle={activeStyle}>
        LOGIN
      </Header.Link>
    </Header.NavItem>
    <Header.NavItem className="logo">
      <Header.Link to="/">
        <img src={MarvelSVG} alt="marvel" />
      </Header.Link>
    </Header.NavItem>
    <Header.NavItem>
      <Header.Link to="/characters" activeStyle={activeStyle}>
        CHARACTERS
      </Header.Link>
    </Header.NavItem>
    <Header.NavItem>
      <Header.Link to="/comics" activeStyle={activeStyle}>
        COMICS
      </Header.Link>
    </Header.NavItem>
  </Header>
)

export default HeaderComponent

import React from 'react'
import { Link } from 'gatsby'
import { MarvelSVG } from '../images'

const activeStyle = {
  color: 'white'
}

const HeaderComponent = () => (
  <header className='header'>
    <div className="nav-item logo">
      <Link to="/">
        <img src={MarvelSVG} alt="marvel" />
      </Link>
    </div>
    <div className="nav-item">
      <Link to="/characters" activeStyle={activeStyle}>
        CHARACTERS
      </Link>
    </div>
    <div className="nav-item">
      <Link to="/comics" activeStyle={activeStyle}>
        COMICS
      </Link>
    </div>
  </header>
)

export default HeaderComponent

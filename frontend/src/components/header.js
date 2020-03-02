import React from 'react'
import { Link } from 'gatsby'
import StyledHeader, { StyledNavItem } from '../styles/HeaderStyles'
import { MarvelSVG } from '../images'

const activeStyle = {
  color: 'white'
}
// header
const Header = () => (
  <StyledHeader>
    <StyledNavItem className='logo'>
      <Link to='/'>
        <img src={MarvelSVG} alt='marvel' />
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to='/characters' activeStyle={activeStyle}>
        CHARACTERS
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to='/comics' activeStyle={activeStyle}>
        COMICS
      </Link>
    </StyledNavItem>
  </StyledHeader>
)

export default Header

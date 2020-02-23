import React from 'react'
import { Link } from 'gatsby'
import StyledHeader, { StyledNavItem } from '../styles/HeaderStyles'
import { MarvelSVG } from '../images'

const Header = () => (
  <StyledHeader>
    <StyledNavItem className='logo'>
      <Link to='/'>
        <img src={MarvelSVG} alt='marvel' />
      </Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to='/characters'>CHARACTERS</Link>
    </StyledNavItem>
    <StyledNavItem>
      <Link to='/comics'>COMICS</Link>
    </StyledNavItem>
  </StyledHeader>
)

export default Header

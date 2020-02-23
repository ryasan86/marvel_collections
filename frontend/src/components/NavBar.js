import React from 'react'
import { Link } from 'react-router-dom'
import { MarvelSVG } from '../images'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <ul className='nav-list'>
      <li className='nav-item logo'>
        <Link to='/'>
          <img src={MarvelSVG} alt='search' />
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/characters'>CHARACTERS</Link>
      </li>
      <li className='nav-item'>
        <Link to='/comics'>COMICS</Link>
      </li>
    </ul>
  )
}

export default NavBar

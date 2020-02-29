import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ItemStyles from '../styles/ItemStyles'

const CharacterItem = ({ c, path }) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnLoad = e => setIsVisible(true)
  const handleError = () => setIsVisible(true)
  const linkProps = { to: `${path}/${c.name}`, state: c }

  return (
    <ItemStyles isVisible={isVisible}>
      <Link {...linkProps}>
        <img
          onLoad={handleOnLoad}
          onError={handleError}
          src={c.thumbnail.path + '/portrait_incredible.jpg'}
          alt={c.name}
        />
      </Link>
      <Link {...linkProps}>
        <div className='text-row'>{c.name}</div>
      </Link>
    </ItemStyles>
  )
}

const ComicItem = ({ c, path }) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnLoad = () => setIsVisible(true)
  const handleError = () => setIsVisible(true)
  const linkProps = { to: `${path}/${c.name}`, state: c }

  return (
    <ItemStyles isVisible={isVisible}>
      <Link {...linkProps}>
        <img
          onLoad={handleOnLoad}
          onError={handleError}
          src={c.thumbnail.path + '/portrait_incredible.jpg'}
          alt={c.title}
        />
      </Link>
      <Link {...linkProps}>
        <div className='text-row'>{c.title}</div>
      </Link>
    </ItemStyles>
  )
}

const Item = props => {
  switch (props.path) {
    case '/characters':
      return <CharacterItem {...props} />
    case '/comics':
      return <ComicItem {...props} />
  }
}

CharacterItem.propTypes = {
  c: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
}

export default Item

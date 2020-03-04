import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ItemStyles from '../styles/ItemStyles'

const CharacterItem = ({ c, slug }) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnLoad = e => setIsVisible(true)
  const handleError = () => setIsVisible(true)
  const props = { to: `${slug}/${c.name}`, state: c }

  return (
    <ItemStyles isVisible={isVisible}>
      <Link {...props}>
        <img
          onLoad={handleOnLoad}
          onError={handleError}
          src={c.thumbnail}
          alt={c.name}
        />
      </Link>
      <Link {...props}>
        <div className='text-row'>{c.name}</div>
      </Link>
    </ItemStyles>
  )
}

const ComicItem = ({ c, slug }) => {
  const [isVisible, setIsVisible] = useState(false)
  const loadImg = () => setIsVisible(true)
  const props = { to: `${slug}/${c.name}`, state: c }

  return (
    <ItemStyles isVisible={isVisible}>
      <Link {...props}>
        <img
          onLoad={loadImg}
          onError={loadImg}
          src={c.thumbnail}
          alt={c.title}
        />
      </Link>
      <Link {...props}>
        <div className='text-row'>{c.title}</div>
      </Link>
    </ItemStyles>
  )
}

const Item = props => {
  switch (props.slug) {
    case '/characters':
      return <CharacterItem {...props} />
    case '/comics':
      return <ComicItem {...props} />
  }
}

CharacterItem.propTypes = {
  c: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
}

export default Item

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ItemStyles from '../styles/ItemStyles'

const CharacterItem = ({ c, endpoint }) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnLoad = () => setIsVisible(true)

  return (
    <ItemStyles isVisible={isVisible}>
      <Link to={`${endpoint}/${c.name}`} state={c}>
        <img
          onLoad={handleOnLoad}
          src={c.thumbnail.path + '/portrait_incredible.jpg'}
          alt={c.name}
        />
      </Link>
      <div className='text-row'>{c.name}</div>
    </ItemStyles>
  )
}

const ComicItem = ({ c, endpoint }) => {
  console.log(c)
  const [isVisible, setIsVisible] = useState(false)
  const handleOnLoad = () => setIsVisible(true)

  return (
    <ItemStyles isVisible={isVisible}>
      <Link to={`${endpoint}/${c.title}`} state={c}>
        <img
          onLoad={handleOnLoad}
          src={c.thumbnail.path + '/portrait_incredible.jpg'}
          alt={c.title}
        />
      </Link>
      <div className='text-row'>{c.title}</div>
    </ItemStyles>
  )
}

const Item = props => {
  switch (props.endpoint) {
    case '/characters':
      return <CharacterItem {...props} />
    case '/comics':
      return <ComicItem {...props} />
  }
}

CharacterItem.propTypes = {
  c: PropTypes.object.isRequired,
  endpoint: PropTypes.string.isRequired
}

export default Item

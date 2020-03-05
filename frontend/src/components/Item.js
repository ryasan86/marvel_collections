import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Item from '../styles/ItemStyles'

const CharacterItem = ({ c, slug }) => {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnLoad = e => setIsVisible(true)
  const handleError = () => setIsVisible(true)
  const props = { to: `${slug}/${c.name}`, state: c }

  return (
    <Item isVisible={isVisible}>
      <Item.Link {...props}>
        <Item.Image
          onLoad={handleOnLoad}
          onError={handleError}
          src={c.thumbnail}
          alt={c.name}
        />
      </Item.Link>
      <Item.Link {...props}>
        <Item.Row>{c.name}</Item.Row>
      </Item.Link>
    </Item>
  )
}

const ComicItem = ({ c, slug }) => {
  const [isVisible, setIsVisible] = useState(false)
  const loadImg = () => setIsVisible(true)
  const props = { to: `${slug}/${c.title}`, state: c }

  return (
    <Item isVisible={isVisible}>
      <Item.Link {...props}>
        <Item.Image
          onLoad={loadImg}
          onError={loadImg}
          src={c.thumbnail}
          alt={c.title}
        />
      </Item.Link>
      <Item.Link {...props}>
        <Item.Row>{c.title}</Item.Row>
      </Item.Link>
    </Item>
  )
}

const ItemComponent = props => {
  switch (props.slug) {
    case '/characters':
      return <CharacterItem {...props} />
    case '/comics':
      return <ComicItem {...props} />
  }
}

ItemComponent.propTypes = {
  c: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
}

export default ItemComponent

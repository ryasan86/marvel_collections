import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Item from '../styles/ItemStyles'

const CharacterItem = ({ c, slug }) => {
  const [isVisible, setIsVisible] = useState(false)
  const displayImg = () => setIsVisible(true)
  const uri = `${slug}/${c.id}`

  return (
    <Item isVisible={isVisible}>
      <Item.Link to={uri}>
        <Item.Image
          onLoad={displayImg}
          onError={displayImg}
          src={c.thumbnail}
          alt={c.name}
        />
      </Item.Link>
      <Item.Link to={uri}>
        <Item.Row>{c.name}</Item.Row>
      </Item.Link>
    </Item>
  )
}

const ComicItem = ({ c, slug }) => {
  const [isVisible, setIsVisible] = useState(false)
  const displayImg = () => setIsVisible(true)
  const uri = `${slug}/${c.id}`

  return (
    <Item isVisible={isVisible}>
      <Item.Link to={uri}>
        <Item.Image
          onLoad={displayImg}
          onError={displayImg}
          src={c.thumbnail}
          alt={c.title}
        />
      </Item.Link>
      <Item.Link to={uri}>
        <Item.Row>{c.title}</Item.Row>
      </Item.Link>
    </Item>
  )
}

ComicItem.defaultProps = {
  c: {},
  slug: ''
}

ComicItem.propTypes = {
  c: PropTypes.object,
  slug: PropTypes.string
}

const ItemComponent = props => {
  switch (props.slug) {
    case '/characters':
      return <CharacterItem {...props} />
    case '/comics':
      return <ComicItem {...props} />
  }
}

export default ItemComponent

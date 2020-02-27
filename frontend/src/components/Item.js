import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ItemStyles from '../styles/ItemStyles'

const CharacterItem = ({ c, endpoint }) => (
  <ItemStyles>
    <Link to={`${endpoint}/${c.name}`} state={c}>
      <img src={c.thumbnail.path + '/portrait_incredible.jpg'} alt={c.name} />
    </Link>
    <div className='text-row'>{c.name}</div>
  </ItemStyles>
)

const ComicItem = ({ c, endpoint }) => (
  <ItemStyles>
    <Link to={`${endpoint}/${c.title}`} state={c}>
      <img src={c.thumbnail.path + '/portrait_incredible.jpg'} alt={c.title} />
    </Link>
    <div className='text-row'>{c.title}</div>
  </ItemStyles>
)

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

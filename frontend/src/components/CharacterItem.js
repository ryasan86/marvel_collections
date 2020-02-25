import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import StyledCharacterItem from '../styles/CharacterItemStyles'

const CharacterItem = ({ c }) => (
  <StyledCharacterItem>
    <div>{c.name}</div>
    <Link to={`/characters/${c.name}`} state={c}>
      <img src={c.thumbnail.path + '/portrait_incredible.jpg'} alt={c.name} />
    </Link>
  </StyledCharacterItem>
)

CharacterItem.propTypes = {
  c: PropTypes.object.isRequired
}

export default CharacterItem

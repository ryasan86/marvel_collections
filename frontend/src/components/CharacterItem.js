import React from 'react'
import PropTypes from 'prop-types'
import StyledCharacterItem from '../styles/CharacterItemStyles'

const CharacterItem = ({ c }) => {
  return (
    <StyledCharacterItem>
      <div>{c.name}</div>
      <img src={c.thumbnail.path + '/portrait_xlarge.jpg'} alt={c.name} />
    </StyledCharacterItem>
  )
}

CharacterItem.propTypes = {
  c: PropTypes.object.isRequired
}

export default CharacterItem

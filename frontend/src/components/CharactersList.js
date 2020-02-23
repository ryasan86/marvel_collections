import React from 'react'
import PropTypes from 'prop-types'
import StyledCharactersList from '../styles/CharactersListStyles'
import CharacterItem from './CharacterItem'

const CharactersList = ({ characters }) => {
  return (
    <StyledCharactersList data-testid='characters-list'>
      {characters.map((c, i) => (
        <CharacterItem key={c.name} c={c}></CharacterItem>
      ))}
    </StyledCharactersList>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharactersList

import React from 'react'
import PropTypes from 'prop-types'
import StyledCharactersList from '../styles/CharactersListStyles'
import CharacterItem from './CharacterItem'
import DelayMessage from './DelayMessage'

const CharactersList = ({ characters }) => {
  if (!characters) {
    return <DelayMessage text='Loading...' />
  }

  if (characters.length === 0) {
    return <DelayMessage text='0 Characters Found 😮' />
  }

  return (
    <StyledCharactersList>
      {characters.map((c, i) => (
        <CharacterItem key={c.name} c={c}></CharacterItem>
      ))}
    </StyledCharactersList>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}

export default CharactersList

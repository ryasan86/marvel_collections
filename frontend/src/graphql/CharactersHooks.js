import { useQuery } from '@apollo/react-hooks'
import {
  CHARACTERS,
  CHARACTER_NAME_STARTS_WITH,
  CHARACTER
} from './CharactersRequests'

export const useCharacters = ({ page, orderBy, limit }) => {
  return useQuery(CHARACTERS, {
    variables: { page, orderBy, limit }
  })
}

export const useCharacter = ({ id }) => {
  return useQuery(CHARACTER, {
    variables: { id }
  })
}

export const useCharactersByName = ({ page, orderBy, search }) => {
  return useQuery(CHARACTER_NAME_STARTS_WITH, {
    variables: { page, orderBy, search }
  })
}

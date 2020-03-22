import { useQuery } from '@apollo/react-hooks'
import {
  ALL_CHARACTERS,
  CHARACTER_NAME_STARTS_WITH,
  RANDOM_COMIC_VINE_CHARACTER
} from './CharactersQuery'

export const useCharacters = ({ page, orderBy, limit }) => {
  return useQuery(ALL_CHARACTERS, {
    variables: { page, orderBy, limit }
  })
}

export const useCharactersByName = ({ page, orderBy, search }) => {
  return useQuery(CHARACTER_NAME_STARTS_WITH, {
    variables: { page, orderBy, search }
  })
}

export const useRandomComicVineCharacter = () => {
  return useQuery(RANDOM_COMIC_VINE_CHARACTER)
}

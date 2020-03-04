import { useQuery } from '@apollo/react-hooks'
import { ALL_CHARACTERS, CHARACTER_NAME_STARTS_WITH } from './CharactersQuery'

export const useCharacters = ({ page, orderBy }) => {
  return useQuery(ALL_CHARACTERS, {
    variables: { page, orderBy }
  })
}

export const useCharactersByName = ({ page, orderBy, search }) => {
  return useQuery(CHARACTER_NAME_STARTS_WITH, {
    variables: { page, orderBy, search }
  })
}

import { useQuery } from '@apollo/react-hooks'
import {
  ALL_COMICS,
  COMIC_TITLE_STARTS_WITH,
  COMICS_BY_CHARACTER
} from './ComicsQuery'

export const useComics = ({ page, orderBy, limit }) => {
  return useQuery(ALL_COMICS, {
    variables: { page, orderBy, limit }
  })
}

export const useComicsByTitle = ({ page, orderBy, search }) => {
  return useQuery(COMIC_TITLE_STARTS_WITH, {
    variables: { page, orderBy, search }
  })
}

export const useComicsByCharacter = ({ page, orderBy, charId }) => {
  return useQuery(COMICS_BY_CHARACTER, {
    variables: { page, orderBy, charId }
  })
}

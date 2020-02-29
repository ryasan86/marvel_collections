import { useQuery } from '@apollo/react-hooks'
import {
  ALL_COMICS,
  COMIC_TITLE_STARTS_WITH,
  COMICS_BY_CHARACTER
} from './comics.query'

export const useComics = ({ page, orderBy }) => {
  return useQuery(ALL_COMICS, {
    variables: { page, orderBy }
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

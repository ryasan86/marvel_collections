import { useQuery } from '@apollo/react-hooks'
import {
  COMICS,
  COMIC,
  COMIC_TITLE_STARTS_WITH,
  COMICS_BY_CHARACTER,
  SHOP_FOR_COMIC
} from './ComicsRequests'

export const useComics = ({ page, orderBy, limit }) => {
  return useQuery(COMICS, {
    variables: { page, orderBy, limit }
  })
}

export const useComic = ({ id }) => {
  return useQuery(COMIC, {
    variables: { id }
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

export const useShopForComic = ({ title }) => {
  return useQuery(SHOP_FOR_COMIC, {
    variables: { title }
  })
}

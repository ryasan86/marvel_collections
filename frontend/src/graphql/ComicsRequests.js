import gql from 'graphql-tag'
import { COMIC_FRAGMENT } from './Fragments'

export const COMICS = gql`
  query comics($orderBy: String!, $page: Int!, $limit: Int = 35) {
    comics(orderBy: $orderBy, page: $page, limit: $limit) {
      totalCount
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`

export const COMIC = gql`
  query comic($id: ID!) {
    comic(id: $id) {
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`

export const COMIC_TITLE_STARTS_WITH = gql`
  query comicTitleStartsWith($orderBy: String!, $page: Int!, $search: String!) {
    comicTitleStartsWith(orderBy: $orderBy, page: $page, search: $search) {
      totalCount
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`

export const COMICS_BY_CHARACTER = gql`
  query comicsByCharacter($orderBy: String!, $page: Int!, $charId: ID!) {
    comicsByCharacter(orderBy: $orderBy, page: $page, charId: $charId) {
      totalCount
      edges {
        node {
          ...ComicFragment
        }
      }
    }
  }
  ${COMIC_FRAGMENT}
`

export const SHOP_FOR_COMIC = gql`
  query shopForComic($title: String!) {
    shopForComic(title: $title) {
      totalCount
      edges {
        node {
          vendor
          title
          price
          image
          description
          url
          favicon
        }
      }
    }
  }
`

import gql from 'graphql-tag'

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFragment on Character {
    id
    name
    description
    thumbnail
  }
`

export const COMIC_FRAGMENT = gql`
  fragment ComicFragment on Comic {
    id
    title
    description
    modified
    prices {
      type
      price
    }
    creators {
      name
      role
    }
    thumbnail
  }
`

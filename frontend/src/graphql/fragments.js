import { gql } from 'apollo-boost'

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFragment on Character {
    id
    name
    description
    thumbnail
  }
`
export const COMICS_FRAGMENT = gql`
  fragment ComicsFragment on Comic {
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

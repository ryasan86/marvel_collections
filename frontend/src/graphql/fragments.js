import { gql } from "apollo-boost"

export const CHARACTER_FRAGMENT = gql`
  fragment CharacterFragment on Character {
    id
    name
    description
    thumbnail
  }
`
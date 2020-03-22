import gql from 'graphql-tag'
import { CHARACTER_FRAGMENT } from './Fragments'

export const ALL_CHARACTERS = gql`
  query allCharacters($orderBy: String, $page: Int!, $limit: Int = 35) {
    characters(orderBy: $orderBy, page: $page, limit: $limit) {
      totalCount
      edges {
        node {
          ...CharacterFragment
        }
      }
    }
  }
  ${CHARACTER_FRAGMENT}
`

export const CHARACTER_NAME_STARTS_WITH = gql`
  query characterNameStartsWith(
    $orderBy: String!
    $page: Int!
    $search: String!
  ) {
    characterNameStartsWith(orderBy: $orderBy, page: $page, search: $search) {
      totalCount
      edges {
        node {
          ...CharacterFragment
        }
      }
    }
  }
  ${CHARACTER_FRAGMENT}
`

export const RANDOM_COMIC_VINE_CHARACTER = gql`
  {
    randomComicVineCharacter {
      id
      aliases
      deck
      description
      first_appeared_in_issue
      image
      real_name
      name
      publisher
    }
  }
`

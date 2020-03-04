import gql from 'graphql-tag'
import { CHARACTER_FRAGMENT } from './Fragments'

export const ALL_CHARACTERS = gql`
  query allCharacters($orderBy: String!, $page: Int!) {
    characters(orderBy: $orderBy, page: $page) {
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
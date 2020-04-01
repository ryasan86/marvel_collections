import gql from 'graphql-tag'
import { CHARACTER_FRAGMENT } from './Fragments'

export const CHARACTERS = gql`
  query characters($orderBy: String, $page: Int!, $limit: Int = 35) {
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

export const CHARACTER = gql`
  query character($id: ID!) {
    character(id: $id) {
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

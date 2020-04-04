import gql from 'graphql-tag'

export const LOCAL_STATE_QUERY = gql`
  query @client {
    modalOpen
    shopForTitle
  }
`

export const TOGGLE_MODAL_MUTATION = gql`
  mutation {
    toggleModal @client
  }
`

export const SET_SHOP_FOR_TITLE_MUTATION = gql`
  mutation setShopForTitle($shopForTitle: String!) {
    setShopForTitle(shopForTitle: $shopForTitle) @client
  }
`

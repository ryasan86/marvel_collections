import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { LOCAL_STATE_QUERY } from '../graphql/LocalStateRequests'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'https://marvel-collections-backend.herokuapp.com'

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
  fetch,
  // local data
  clientState: {
    resolvers: {
      Mutation: {
        toggleModal: (_, variables, { cache }) => {
          const { modalOpen } = cache.readQuery({ query: LOCAL_STATE_QUERY })
          const data = { data: { modalOpen: !modalOpen } }
          cache.writeData(data)
          return data
        },
        setShopForTitle: (_, { shopForTitle }, { cache }) => {
          const data = { data: { shopForTitle } }
          cache.writeData(data)
          return data
        }
      }
    },
    defaults: {
      modalOpen: false,
      shopForTitle: null
    }
  }
})

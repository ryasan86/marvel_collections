import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

const devEndpoint = 'http://localhost:5000'
const prodEndpoint = 'https://marvel-collections-backend.herokuapp.com'

export const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint,
  fetch
})

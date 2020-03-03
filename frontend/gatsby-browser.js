import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { devEndpoint, prodEndpoint } from './src/client'

const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'development' ? devEndpoint : prodEndpoint
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

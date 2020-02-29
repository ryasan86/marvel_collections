import GraphqlYoga from 'graphql-yoga'
import Mutation from './resolvers/Mutation.js'
import Query from './resolvers/Query.js'
const { GraphQLServer } = GraphqlYoga

export const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Mutation, Query },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
}

export default createServer

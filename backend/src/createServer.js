const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation.js')
const Query = require('./resolvers/Query.js')

const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: { Mutation, Query },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  })
}

module.exports = createServer

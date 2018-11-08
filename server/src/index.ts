import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import resolvers from './resolvers'
import { ApolloEngine } from 'apollo-engine'

const PORT = process.env.PORT || 4000

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT,
      debug: true
    })
  })
})

const engine = new ApolloEngine({
  apiKey: process.env.APOLLO_ENGINE_KEY
})

const httpServer = server.createHttpServer({
  tracing: true,
  cacheControl: true
})

engine.listen(
  {
    port: PORT,
    httpServer,
    graphqlPaths: ['/']
  },
  () =>
    console.log(
      `Server with Apollo Engine is running on http://localhost:${PORT}`
    )
)

// server.start(() => console.log(`Server is running on http://localhost:4000`))

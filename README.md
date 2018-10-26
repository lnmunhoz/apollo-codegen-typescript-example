# Apollo Codegen Example
Example of an end to end types integration between a GraphQL Server and a React application powered by Apollo.

## Overview
- The `server` folder contains a TypeScript GraphQL server boilerplate from [graphql-boilerplates](https://github.com/graphql-boilerplates/typescript-graphql-server/tree/master/advanced).
- The `web` folder contains a TypeScript React application bootstraped with the boilerplate [Microsoft TypeScript Starter](https://github.com/Microsoft/TypeScript-React-Starter)

## Workflow
After you create your query using `gql` inside a `tsx` file, run the command `yarn codegen` and the types with be generated at `./web/src/generated/queries/ts`. Then, you can import the types into your file and type your queries, like so:

```tsx
import { FeedQuery } from './generated/queries'

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      text
    }
  }
`

const Feed = () => (
  <Query<FeedQuery, {}> query={FEED_QUERY}>
    {({ data, loading })} => // your component
  </Query>
)
```

Check `./web/src/App.tsx` for more examples.

## Setup

Server setup:
```bash
cd server
yarn
yarn dev
```

Web setup:
```bash
cd web
yarn
yarn start
```


module.exports = {
  schemas: {
    app: {
      schema: "./src/generated/schema.graphql", // if not defined the an introspection query will be run
      endpoint: "http://localhost:4000" // if not defined the schema will be downloaded from Apollo Engine
    }
  },
  queries: [ 
    {
      "schema": "app", // reference the previously defined schema
      "includes": [ "./src/*.tsx" ], // load queries from .tsx files
      "excludes": [ "node_modules/**" ] // don't include any matching files from node_modules
    }
  ]
}
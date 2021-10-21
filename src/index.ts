import { GraphQLServer } from "graphql-yoga";
import path from "path";
import { Resolvers } from "./resolvers";

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers: Resolvers
});

server.start();

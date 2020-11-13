const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);
  })
  .catch(err => console.log(err, "err running server"));

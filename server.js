const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const { sequelize } = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4000, () => {
    console.log(`🚀 Server ready at port 4000`);

  sequelize
    .authenticate()
    .then(() => {
      console.log("database connected");
    })
    .catch(err => console.log(err, "err running server"));
  });

const { gql } = require("apollo-server");

module.exports = gql`
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }
  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }
  type User {
    username: String!
    email: String!
    password: String!
  }
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }
  # ----- End of Type models ----- #
  type Query {
    getUsers: [User!]!
    getMessages: [Message!]
    getUser(id: Int!): User!
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    createMessage(channel_id: Int!, text: String!): Boolean
    createTeam(name: String!): Boolean
    createChannel(teamId: Int!, name: String!, public: Boolean = false): Boolean
  }
`
;

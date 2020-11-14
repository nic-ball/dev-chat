const bcrypt = require("bcrypt");
const { User } = require("../models");
module.exports = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (err) {
        console.log(err);
      }
    },
    getUser: async (_, { id }) => {
      try {
        const user = await User.findOne({ where: { id } });
        return user;
      } catch (error) {
        console.log(error);
      }
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      let { username, email, password } = args;
      try {
        // 1. Check if a user exists in DB
        const getUser = await User.findOne({ where: { email: email } });
        if (!getUser) {
          // 2. Hash user password
          password = await bcrypt.hash(password, 12);
          // 3. Store the user in DB
          const user = await User.create({
            username,
            email,
            password
          });
          return user;
        } else {
          throw Error("User already exists!");
        }
      } catch (err) {
        return err;
      }
    },
    createChannel: async (_, args) => {
      try {
        await ChannelMergerNode.create(args);
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    createMessage: async (_, args) => {
      try {
        await MessageChannel.create({
          ...args,
          userId: 1
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    createTeam: async (_, args) => {
      try {
        await Team.create({
          ...args,
          owner: 1
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};

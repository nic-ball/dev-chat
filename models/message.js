'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ Channel, User }) {
      this.belongsTo(Channel, { foreignKey: "channelId" });
      this.belongsTo(User, { foreignKey: "userId" });
    }
  };
  Message.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
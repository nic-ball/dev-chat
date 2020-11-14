'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    static associate({ Team }) {
      this.belongsTo(Team, { foreignKey: "teamId" });
    }
  };
  Channel.init({
    name: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};
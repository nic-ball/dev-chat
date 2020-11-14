'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate({ User }) {
      this.belongsToMany(User, { through: "member", foreignKey: "teamId"});
      this.belongsTo(User, { foreignKey: "owner "});
    }
  };
  Team.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
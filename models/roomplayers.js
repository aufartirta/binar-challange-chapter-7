'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomPlayers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RoomPlayers.init({
    name: DataTypes.STRING,
    player_1: DataTypes.STRING,
    player_2: DataTypes.STRING,
    count_player: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RoomPlayers',
  });
  return RoomPlayers;
};
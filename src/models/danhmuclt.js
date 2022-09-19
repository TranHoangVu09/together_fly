'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danhmuclt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Danhmuclt.init({
    tendanhmuc: DataTypes.STRING, 
    thutu: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Danhmuclt',
  });
  return Danhmuclt;
};
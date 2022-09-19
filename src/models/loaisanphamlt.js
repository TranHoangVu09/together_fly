'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaisanphamlt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Loaisanphamlt.init({
    tenloaisanpham: DataTypes.STRING, 
    thutu: DataTypes.STRING,
    id_danhmuc: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Loaisanphamlt',
  });
  return Loaisanphamlt;
};
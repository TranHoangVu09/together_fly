'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sanphamlatop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sanphamlatop.init({
    tensanpham: DataTypes.STRING, 
    masp: DataTypes.STRING,
    giasp: DataTypes.STRING,
    khuyenmai: DataTypes.STRING,
    soluong: DataTypes.STRING,
    hinhanh: DataTypes.STRING,
    hinhanhdong: DataTypes.STRING,
    tomtat: DataTypes.TEXT,
    noidung: DataTypes.TEXT,
    tinhtrang: DataTypes.STRING,
    noidungkhuyenmai: DataTypes.TEXT,
    id_loaidanhmuc: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sanphamlatop',
  });
  return Sanphamlatop;
};
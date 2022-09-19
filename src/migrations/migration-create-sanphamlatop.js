'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sanphamlatop', {
      id_laptop: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tensanpham: {
        type: Sequelize.STRING
      },
      masp: {
        type: Sequelize.STRING
      },
      giasp: {
        type: Sequelize.STRING
      },
      khuyenmai: {
        type: Sequelize.STRING
      },
      soluong: {
        type: Sequelize.STRING
      },
      hinhanh: {
        type: Sequelize.STRING
      },
      hinhanhdong: {
        type: Sequelize.STRING
      },
      tomtat: {
        type: Sequelize.TEXT
      },
      noidung: {
        type: Sequelize.TEXT
      },
      tinhtrang: {
        type: Sequelize.STRING
      },
      noidungkhuyenmai: {
        type: Sequelize.TEXT
      },
      id_loaidanhmuc: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sanphamlatop');
  }
};
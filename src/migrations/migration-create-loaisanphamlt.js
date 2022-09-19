'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loaisanphamlt', {
      id_loaidanhmuc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenloaisanpham: {
        type: Sequelize.STRING
      },
      thutu: {
        type: Sequelize.STRING
      },
      id_danhmuc: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Loaisanphamlt');
  }
};
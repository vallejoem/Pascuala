'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amount: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      sales_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'sales',
          key:'id'
        }
      },
      products_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'products',
          key:'id'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_sales');
  }
};
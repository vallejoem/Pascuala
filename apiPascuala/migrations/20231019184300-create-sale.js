'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code_sale: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      tax: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      subtotal: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      clients_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'clients',
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
    await queryInterface.dropTable('sales');
  }
};
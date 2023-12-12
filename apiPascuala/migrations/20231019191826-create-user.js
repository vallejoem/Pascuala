'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING(65)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      active: {
        type: Sequelize.INTEGER
      },
      type_user: {
        allowNull: false,
        type: Sequelize.INTEGER
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
      },
      deletedAt: { 
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
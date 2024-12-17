'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      email: {
        type: Sequelize.STRING(100),
        primaryKey: true,
        allowNull: false
      },
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: true
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      phone_number: {
        type: Sequelize.STRING(11),
        allowNull: true
      },
      account_balance: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      person_type: {
        type: Sequelize.STRING(8),
        allowNull: true
      },
      type_account: {
        type: Sequelize.STRING(20),
        allowNull: true,
        defaultValue: 'customer'
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
    await queryInterface.dropTable('Users');
  }
};
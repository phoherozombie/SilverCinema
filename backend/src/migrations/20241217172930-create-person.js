'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('person', {
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.CHAR(11),
        allowNull: true,
      },
      account_balance: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      person_type: {
        type: Sequelize.STRING(8),
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('person');
  },
};

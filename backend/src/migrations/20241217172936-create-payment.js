'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      payment_time: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      method: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      customer_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        references: {
          model: 'person', // Referencing the 'person' table
          key: 'email',
        },
        onDelete: 'CASCADE', // Cascade delete when the associated person is removed
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
    await queryInterface.dropTable('payment');
  },
};

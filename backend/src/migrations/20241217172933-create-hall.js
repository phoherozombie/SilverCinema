'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hall', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      total_seats: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      theatre_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'theatre', // Name of the referenced table
          key: 'id',        // Column in the referenced table
        },
        onDelete: 'CASCADE', // Ensures cascading deletion
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
    await queryInterface.dropTable('hall');
  },
};

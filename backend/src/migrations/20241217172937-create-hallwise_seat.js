'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hallwise_seat', {
      hall_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'hall', // Referencing the 'hall' table
          key: 'id',
        },
        onDelete: 'CASCADE', // Cascade delete when a hall is removed
        primaryKey: true,
      },
      seat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'seat', // Referencing the 'seat' table
          key: 'id',
        },
        onDelete: 'CASCADE', // Cascade delete when a seat is removed
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hallwise_seat');
  },
};

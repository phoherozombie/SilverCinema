'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shown_in', {
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'movie', // Referencing the 'movie' table
          key: 'id',
        },
        onDelete: 'CASCADE', // Cascade delete when a movie is removed
        primaryKey: true,
      },
      showtime_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'showtimes', // Referencing the 'showtimes' table
          key: 'id',
        },
        onDelete: 'CASCADE', // Cascade delete when a showtime is removed
        primaryKey: true,
      },
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
    await queryInterface.dropTable('shown_in');
  },
};

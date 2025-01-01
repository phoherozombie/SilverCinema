'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movie_directors', {
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
      director: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movie_directors');
  },
};

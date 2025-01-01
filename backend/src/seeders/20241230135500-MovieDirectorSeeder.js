'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movie_directors', [
      {
        movie_id: 1,
        director: 'Joaquim Dos Santos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        director: 'Justin K. Thompson',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        director: 'Kemp Powers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 2,
        director: 'Sam Hargrave',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 3,
        director: 'Jeremy Garelick',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 4,
        director: 'Christopher McQuarrie',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        director: 'Christopher Nolan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 6,
        director: 'Greta Gerwig',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movie_directors', null, {});
  },
};

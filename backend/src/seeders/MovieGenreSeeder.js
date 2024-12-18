'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieGenres', [
      {
        movie_id: 1,
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_id: 1,
        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_id: 2,
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieGenres', null, {});
  }
}; 
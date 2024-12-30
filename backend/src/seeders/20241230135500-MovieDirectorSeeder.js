'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieDirectors', [
      {
        movie_id: 1,
        director: 'Anthony Russo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_id: 1,
        director: 'Joe Russo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_id: 2,
        director: 'Jon Watts',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieDirectors', null, {});
  }
};
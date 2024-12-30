'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieGenres', [
      {
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieGenres', null, {});
  }
};
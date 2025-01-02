'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieGenres', [
 {

        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Animation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Biography',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
  
        genre: 'History',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        genre: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieGenres', null, {});
  }
};
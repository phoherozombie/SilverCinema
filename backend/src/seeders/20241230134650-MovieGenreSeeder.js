'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('movie_genre', [
      {
        movie_id: 1,
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 1,
        genre: 'Animation',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 2,
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 2,
        genre: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 3,
        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 3,
        genre: 'Mystery',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 4,
        genre: 'Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 4,
        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 4,
        genre: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        genre: 'Biography',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 5,
        genre: 'History',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 6,
        genre: 'Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 6,
        genre: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 6,
        genre: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movie_genre', null, {});
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        name: 'Avengers: Endgame',
        image_path: '/movies/avengers.jpg',
        language: 'English',
        synopsis: 'After Thanos wiped out half of all life in the universe...',
        rating: 4.8,
        duration: '181 mins',
        top_cast: 'Robert Downey Jr., Chris Evans',
        release_date: '2019-04-26',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spider-Man: No Way Home',
        image_path: '/movies/spiderman.jpg',
        language: 'English',
        synopsis: 'Peter Parker seeks Doctor Strange\'s help...',
        rating: 4.5,
        duration: '148 mins',
        top_cast: 'Tom Holland, Zendaya',
        release_date: '2021-12-17',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
}; 
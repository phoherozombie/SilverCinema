'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        name: 'Avengers: Endgame',
        image_path: '/movies/avengers.jpg',
        language: 'English',
        synopsis: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        rating: 4.8,
        duration: '181 mins',
        top_cast: 'Robert Downey Jr., Chris Evans',
        release_date: '2019-04-26',
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Spider-Man: No Way Home',
        image_path: '/movies/spiderman.jpg',
        language: 'English',
        synopsis: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
        rating: 4.5,
        duration: '148 mins',
        top_cast: 'Tom Holland, Zendaya',
        release_date: '2021-12-17',
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
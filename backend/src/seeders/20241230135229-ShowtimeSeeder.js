'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Showtimes', [
      {
        movie_start_time: '10:00',
        show_type: '2D',
        showtime_date: '2024-01-01',
        price_per_seat: 90000,
        movie_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movie_start_time: '13:00',
        show_type: '3D',
        showtime_date: '2024-01-01',
        price_per_seat: 120000,
        movie_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Showtimes', null, {});
  }
};
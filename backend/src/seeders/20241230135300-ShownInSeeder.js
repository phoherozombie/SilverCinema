'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shown_in', [
      { movie_id: 1, showtime_id: 1, hall_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 1, hall_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 2, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 2, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 3, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 3, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 4, hall_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 4, hall_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 5, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 5, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 6, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 6, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 7, hall_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 7, hall_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 8, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 8, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 9, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 9, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 10, hall_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 10, hall_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 11, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 11, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 12, hall_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 12, hall_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 2, hall_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 2, hall_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 3, hall_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 3, hall_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 5, hall_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 5, hall_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 6, hall_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 6, hall_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 8, hall_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 8, hall_id: 8, createdAt: new Date(), updatedAt: new Date() },
      // More data entries continue here...
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('shown_in', null, {});
  },
};

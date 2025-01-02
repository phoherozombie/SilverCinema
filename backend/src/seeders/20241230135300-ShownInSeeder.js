'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const shownIns = [
      { movie_id: 1, showtime_id: 1, hall_id: 1, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 1, hall_id: 5, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 2, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 2, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 3, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 3, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 4, hall_id: 1, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 4, hall_id: 5, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 5, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 5, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 6, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 6, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 7, hall_id: 1, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 7, hall_id: 5, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 8, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 1, showtime_id: 8, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 2, hall_id: 4, theatre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 2, hall_id: 8, theatre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 3, hall_id: 4, theatre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 2, showtime_id: 3, hall_id: 8, theatre_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 3, showtime_id: 1, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 3, showtime_id: 1, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 3, showtime_id: 4, hall_id: 3, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_id: 3, showtime_id: 4, hall_id: 7, theatre_id: 1, createdAt: new Date(), updatedAt: new Date() },
    ];

    return queryInterface.bulkInsert('ShownIns', shownIns);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ShownIns', null, {});
  },
};

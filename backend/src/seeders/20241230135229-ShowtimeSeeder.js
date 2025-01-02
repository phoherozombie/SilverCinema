'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const showtimes = [
      { movie_start_time: '11:00 am', show_type: '2D', showtime_date: '2024-08-19', price_per_seat: 350, movie_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '2:30 pm', show_type: '3D', showtime_date: '2024-08-19', price_per_seat: 450, movie_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '6:00 pm', show_type: '3D', showtime_date: '2024-08-19', price_per_seat: 450, movie_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '11:00 am', show_type: '2D', showtime_date: '2024-08-20', price_per_seat: 350, movie_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '2:30 pm', show_type: '3D', showtime_date: '2024-08-20', price_per_seat: 450, movie_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '6:00 pm', show_type: '3D', showtime_date: '2024-08-20', price_per_seat: 450, movie_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '11:00 am', show_type: '2D', showtime_date: '2024-08-21', price_per_seat: 350, movie_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '2:30 pm', show_type: '3D', showtime_date: '2024-08-21', price_per_seat: 450, movie_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '6:00 pm', show_type: '3D', showtime_date: '2024-08-21', price_per_seat: 450, movie_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '11:00 am', show_type: '2D', showtime_date: '2024-08-22', price_per_seat: 350, movie_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '2:30 pm', show_type: '3D', showtime_date: '2024-08-22', price_per_seat: 450, movie_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { movie_start_time: '6:00 pm', show_type: '3D', showtime_date: '2024-08-22', price_per_seat: 450, movie_id: 4, createdAt: new Date(), updatedAt: new Date() },
    ];

    return queryInterface.bulkInsert('Showtimes', showtimes);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Showtimes', null, {});
  },
};

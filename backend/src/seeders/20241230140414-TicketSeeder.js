'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
      {
        price: 15,
        purchase_date: '2024-12-18',
        payment_id: 1,
        seat_id: 1,
        hall_id: 1,
        movie_id: 1,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 20,
        purchase_date: '2024-12-18',
        payment_id: 2,
        seat_id: 2,
        hall_id: 2,
        movie_id: 2,
        showtimes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  },
};
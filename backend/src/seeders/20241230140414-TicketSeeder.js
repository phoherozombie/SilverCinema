'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ticket', [
      {
        id: 1,
        price: 450,
        purchase_date: '2024-08-17',
        payment_id: 2,
        seat_id: 3,
        hall_id: 1,
        movie_id: 5,
        showtimes_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        price: 450,
        purchase_date: '2024-08-17',
        payment_id: 2,
        seat_id: 4,
        hall_id: 1,
        movie_id: 5,
        showtimes_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        price: 450,
        purchase_date: '2024-08-17',
        payment_id: 2,
        seat_id: 5,
        hall_id: 1,
        movie_id: 5,
        showtimes_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        price: 350,
        purchase_date: '2024-08-17',
        payment_id: 1,
        seat_id: 3,
        hall_id: 2,
        movie_id: 5,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        price: 350,
        purchase_date: '2024-08-17',
        payment_id: 1,
        seat_id: 4,
        hall_id: 2,
        movie_id: 5,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        price: 350,
        purchase_date: '2024-08-17',
        payment_id: 1,
        seat_id: 5,
        hall_id: 2,
        movie_id: 5,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        price: 350,
        purchase_date: '2024-08-17',
        payment_id: 1,
        seat_id: 6,
        hall_id: 2,
        movie_id: 5,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        price: 450,
        purchase_date: '2024-08-20',
        payment_id: 3,
        seat_id: 19,
        hall_id: 2,
        movie_id: 6,
        showtimes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        price: 450,
        purchase_date: '2024-08-20',
        payment_id: 3,
        seat_id: 20,
        hall_id: 2,
        movie_id: 6,
        showtimes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        price: 450,
        purchase_date: '2024-08-20',
        payment_id: 3,
        seat_id: 21,
        hall_id: 2,
        movie_id: 6,
        showtimes_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        price: 350,
        purchase_date: '2024-08-20',
        payment_id: 4,
        seat_id: 5,
        hall_id: 3,
        movie_id: 3,
        showtimes_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        price: 350,
        purchase_date: '2024-08-20',
        payment_id: 4,
        seat_id: 6,
        hall_id: 3,
        movie_id: 3,
        showtimes_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        price: 350,
        purchase_date: '2024-08-20',
        payment_id: 5,
        seat_id: 6,
        hall_id: 5,
        movie_id: 1,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        price: 350,
        purchase_date: '2024-08-20',
        payment_id: 5,
        seat_id: 5,
        hall_id: 5,
        movie_id: 1,
        showtimes_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        price: 350,
        purchase_date: '2024-08-20',
        payment_id: 6,
        seat_id: 29,
        hall_id: 2,
        movie_id: 5,
        showtimes_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // More entries continue here...
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ticket', null, {});
  },
};

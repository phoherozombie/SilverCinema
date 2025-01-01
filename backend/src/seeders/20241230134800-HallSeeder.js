'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('hall', [
      {
        id: 1,
        name: 'Hall 1',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Hall 2',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Hall 3',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Hall 4',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Hall 1',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Hall 2',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Hall 3',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Hall 4',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hall', null, {});
  },
};

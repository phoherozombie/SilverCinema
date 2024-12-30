'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Halls', [
      {
        name: 'Hall A',
        total_seats: 100,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hall B',
        total_seats: 80,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hall A',
        total_seats: 120,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Halls', null, {});
  }
};
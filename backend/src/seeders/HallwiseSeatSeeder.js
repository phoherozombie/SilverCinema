'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('HallwiseSeats', [
      {
        hall_id: 1,
        seat_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hall_id: 1,
        seat_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hall_id: 2,
        seat_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('HallwiseSeats', null, {});
  },
};

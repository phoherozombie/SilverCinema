'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hallwiseSeats = [];

    // Generate hallwise seat data
    for (let hallId = 1; hallId <= 8; hallId++) {
      for (let seatId = 1; seatId <= 48; seatId++) {
        hallwiseSeats.push({
          hall_id: hallId,
          seat_id: seatId,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert('hallwise_seat', hallwiseSeats, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('hallwise_seat', null, {});
  },
};

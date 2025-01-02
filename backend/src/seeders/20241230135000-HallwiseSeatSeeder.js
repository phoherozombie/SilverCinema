'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hallwiseSeats = [];

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

    return queryInterface.bulkInsert('HallwiseSeats', hallwiseSeats, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HallwiseSeats', null, {});
  },
};

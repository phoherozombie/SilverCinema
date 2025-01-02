'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seats = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let row of rows) {
      for (let i = 1; i <= 12; i++) {
        seats.push({
          name: `${row}${i}`,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    return queryInterface.bulkInsert('Seats', seats);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Seats', null, {});
  }
};

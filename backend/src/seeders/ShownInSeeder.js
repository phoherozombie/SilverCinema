'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ShownIns', [
      {
        movie_id: 1,
        showtime_id: 1,
        hall_id:1,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_id: 2,
        showtime_id: 2,
        hall_id:2,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ShownIns', null, {});
  },
};

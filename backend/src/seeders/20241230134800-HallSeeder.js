'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Halls', [
          {
  
        name: 'Hall 1',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
 
        name: 'Hall 2',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
   
        name: 'Hall 3',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
   
        name: 'Hall 4',
        total_seats: 48,
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
   
        name: 'Hall 1',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
   
        name: 'Hall 2',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Hall 3',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Hall 4',
        total_seats: 48,
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Halls', null, {});
  }
};
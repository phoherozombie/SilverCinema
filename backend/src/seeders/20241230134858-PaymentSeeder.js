'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        payment_time: new Date(),
        amount: 100,
        method: 'Credit Card',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        payment_time: new Date(),
        amount: 200,
        method: 'Debit Card',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payments', null, {});
  },
};
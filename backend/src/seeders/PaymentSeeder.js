'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        payment_time: new Date(),
        amount: 100,
        method: 'Credit Card',
        customer_email: 'user1@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payments', null, {});
  },
};

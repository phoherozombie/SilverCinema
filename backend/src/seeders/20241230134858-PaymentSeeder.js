'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('payment', [
      {
        id: 1,
        payment_time: '2024-08-16 19:41:37',
        amount: 1400,
        method: 'Bkash',
        customer_email: 'Belal123@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        payment_time: '2024-08-16 19:43:03',
        amount: 1350,
        method: 'Nagad',
        customer_email: 'rahim123@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        payment_time: '2024-08-20 10:32:06',
        amount: 1350,
        method: 'Nagad',
        customer_email: 'neloy.saha456@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        payment_time: '2024-08-20 10:44:19',
        amount: 700,
        method: 'Bkash',
        customer_email: 'neloy.saha456@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        payment_time: '2024-08-20 12:24:02',
        amount: 700,
        method: 'Debit Card',
        customer_email: 'neloy.saha456@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        payment_time: '2024-08-20 12:40:15',
        amount: 1050,
        method: 'Nagad',
        customer_email: 'adib@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        payment_time: '2024-08-20 12:41:00',
        amount: 900,
        method: 'Nagad',
        customer_email: 'adib@yahoo.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        payment_time: '2024-08-20 14:36:08',
        amount: 2700,
        method: 'Bkash',
        customer_email: 'sazin@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        payment_time: '2024-08-20 16:13:23',
        amount: 700,
        method: 'Bkash',
        customer_email: 'neloy.saha456@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        payment_time: '2024-08-20 17:56:07',
        amount: 900,
        method: 'Bkash',
        customer_email: 'farhan@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('payment', null, {});
  },
};

'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin1@gmail.com',
        first_name: 'Admin',
        last_name: 'User',
        password: await bcrypt.hash('admin123', 10),
        phone_number: '0123456789',
        account_balance: 1000000,
        person_type: 'admin',
        type_account: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'user1@gmail.com',
        first_name: 'Normal',
        last_name: 'User1',
        password: await bcrypt.hash('user123', 10),
        phone_number: '0987654321',
        account_balance: 500000,
        person_type: 'user',
        type_account: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
}; 
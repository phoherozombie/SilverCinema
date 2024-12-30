'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const hashedPassword = await bcrypt.hash('admin', 10);
      await queryInterface.bulkInsert('Users', [
        {
          id: 1,
          first_name: 'Admin',
          last_name: 'Account',
          email: 'admin@gmail.com',
          password: hashedPassword,
          account_balance: 0,
          type_account: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } catch (error) {
      console.error('Error during seeding:', error);
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { email: 'admin@example.com' }, {});
  }
};
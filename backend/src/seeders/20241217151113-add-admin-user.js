'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('admin', 10);
    await queryInterface.bulkInsert('Users', [
      {
        first_name: 'Admin',
        last_name:'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        type_account: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { email: 'admin@example.com' }, {});
  }
};
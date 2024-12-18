'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Theatres', [
      {
        name: 'Silver Cinema Quận 1',
        location: 'Quận 1',
        location_details: '123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Silver Cinema Quận 7',
        location: 'Quận 7',
        location_details: '456 Nguyễn Thị Thập, Phường Tân Phú, Quận 7, TP.HCM',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Theatres', null, {});
  }
}; 
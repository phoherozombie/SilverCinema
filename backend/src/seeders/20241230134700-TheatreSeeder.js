'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Theatres', [
      {
 name: 'CGV Vincom Đà Nẵng',
        location: 'Hải Châu',
        location_details: 'Tầng 4, Vincom Plaza Ngô Quyền, Số 910A Ngô Quyền, Quận Sơn Trà, Đà Nẵng',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lotte Cinema Đà Nẵng',
        location: 'Cẩm Lệ',
        location_details: 'Tầng 5, TTTM Lotte Mart, 6 Nại Nam, Quận Cẩm Lệ, Đà Nẵng',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Theatres', null, {});
  }
};
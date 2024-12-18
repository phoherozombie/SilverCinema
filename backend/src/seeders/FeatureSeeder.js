'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Features', [
      {
        title: 'IMAX',
        description: 'Trải nghiệm điện ảnh đỉnh cao với công nghệ IMAX',
        image_path: '/features/imax.jpg',
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '4DX',
        description: 'Công nghệ chiếu phim 4DX sống động',
        image_path: '/features/4dx.jpg',
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Features', null, {});
  }
}; 
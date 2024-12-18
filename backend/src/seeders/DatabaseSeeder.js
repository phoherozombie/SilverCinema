'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    
    await require('./UserSeeder').up(queryInterface, Sequelize);
    await require('./MovieSeeder').up(queryInterface, Sequelize);
    await require('./TheatreSeeder').up(queryInterface, Sequelize);
    await require('./HallSeeder').up(queryInterface, Sequelize);
    await require('./SeatSeeder').up(queryInterface, Sequelize);
    await require('./ShowtimeSeeder').up(queryInterface, Sequelize);
    await require('./MovieDirectorSeeder').up(queryInterface, Sequelize);
    await require('./MovieGenreSeeder').up(queryInterface, Sequelize);
    await require('./HallwiseSeatSeeder').up(queryInterface, Sequelize);
    await require('./ShownInSeeder').up(queryInterface, Sequelize);
    await require('./PaymentSeeder').up(queryInterface, Sequelize);
    await require('./TicketSeeder').up(queryInterface, Sequelize);
    await require('./FeatureSeeder').up(queryInterface, Sequelize);

    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    // Xóa dữ liệu theo thứ tự ngược lại
    await queryInterface.bulkDelete('Features', null, {});
    await queryInterface.bulkDelete('Tickets', null, {});
    await queryInterface.bulkDelete('Payments', null, {});
    await queryInterface.bulkDelete('ShownIns', null, {});
    await queryInterface.bulkDelete('HallwiseSeats', null, {});
    await queryInterface.bulkDelete('MovieGenres', null, {});
    await queryInterface.bulkDelete('MovieDirectors', null, {});
    await queryInterface.bulkDelete('Showtimes', null, {});
    await queryInterface.bulkDelete('Seats', null, {});
    await queryInterface.bulkDelete('Halls', null, {});
    await queryInterface.bulkDelete('Theatres', null, {});
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
  }
}; 
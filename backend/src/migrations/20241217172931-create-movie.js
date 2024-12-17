'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      image_path: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      language: {
        type: Sequelize.STRING(15),
        allowNull: true
      },
      synopsis: {
        type: Sequelize.STRING(500),
        allowNull: true
      },
      rating: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: true
      },
      duration: {
        type: Sequelize.STRING(10),
        allowNull: true
      },
      top_cast: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      release_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movie', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      image_path: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      language: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      synopsis: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      rating: {
        type: Sequelize.DECIMAL(2, 1),
        allowNull: true,
      },
      duration: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      top_cast: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      release_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movie');
  },
};

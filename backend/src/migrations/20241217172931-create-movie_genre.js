'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movie_genre', {
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'movie', // Tên bảng phải chính xác
            schema: 'your_schema_name', // Thay bằng tên schema nếu có
          },
          key: 'id', // Cột tham chiếu
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      genre: {
        type: Sequelize.STRING(30),
        allowNull: false,
        primaryKey: true,
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
    await queryInterface.dropTable('movie_genre');
  },
};

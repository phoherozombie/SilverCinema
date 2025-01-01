'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShownIn extends Model {
    static associate(models) {
      // Define associations here
      ShownIn.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie',
      });
      ShownIn.belongsTo(models.Showtimes, {
        foreignKey: 'showtime_id',
        as: 'showtime',
      });
      ShownIn.belongsTo(models.Hall, {
        foreignKey: 'hall_id',
        as: 'hall',
      });
    }
  }

  ShownIn.init(
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Movie',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      showtime_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Showtimes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Hall',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'ShownIn',
      tableName: 'shown_in',
      timestamps: false,
    }
  );

  return ShownIn;
};

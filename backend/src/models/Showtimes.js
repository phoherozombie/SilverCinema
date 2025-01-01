'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Showtimes extends Model {
    static associate(models) {
      // Define associations here
      Showtimes.hasMany(models.ShownIn, {
        foreignKey: 'showtime_id',
        as: 'shownIn',
      });
    }
  }

  Showtimes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      movie_start_time: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      show_type: {
        type: DataTypes.CHAR(2),
        allowNull: true,
      },
      showtime_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      price_per_seat: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Showtimes',
      tableName: 'showtimes',
      timestamps: false,
    }
  );

  return Showtimes;
};

'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Seat.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.CHAR(2),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Seat',
      tableName: 'seat',
      timestamps: false,
    }
  );

  return Seat;
};

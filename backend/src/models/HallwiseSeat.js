'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class HallwiseSeat extends Model {
    static associate(models) {
      // Define associations here
      HallwiseSeat.belongsTo(models.Hall, {
        foreignKey: 'hall_id',
        as: 'hall',
      });
      HallwiseSeat.belongsTo(models.Seat, {
        foreignKey: 'seat_id',
        as: 'seat',
      });
    }
  }

  HallwiseSeat.init(
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Hall', // Name of the related table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      seat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Seat', // Name of the related table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'HallwiseSeat',
      tableName: 'hallwise_seat',
      timestamps: false,
    }
  );

  return HallwiseSeat;
};

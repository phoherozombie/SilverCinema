'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // Define associations here
      Ticket.belongsTo(models.Payment, {
        foreignKey: 'payment_id',
        as: 'payment',
      });
      Ticket.belongsTo(models.Seat, {
        foreignKey: 'seat_id',
        as: 'seat',
      });
      Ticket.belongsTo(models.Hall, {
        foreignKey: 'hall_id',
        as: 'hall',
      });
      Ticket.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie',
      });
      Ticket.belongsTo(models.Showtimes, {
        foreignKey: 'showtimes_id',
        as: 'showtime',
      });
    }
  }

  Ticket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      purchase_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      showtimes_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Ticket',
      tableName: 'ticket',
      timestamps: false,
    }
  );

  return Ticket;
};

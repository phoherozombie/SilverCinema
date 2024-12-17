'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    purchase_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showtimes_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Ticket.associate = function (models) {
    Ticket.belongsTo(models.Payment, { foreignKey: 'payment_id' });
    Ticket.belongsTo(models.Seat, { foreignKey: 'seat_id' });
    Ticket.belongsTo(models.Hall, { foreignKey: 'hall_id' });
    Ticket.belongsTo(models.Movie, { foreignKey: 'movie_id' });
    Ticket.belongsTo(models.Showtime, { foreignKey: 'showtimes_id' });
  };

  return Ticket;
};

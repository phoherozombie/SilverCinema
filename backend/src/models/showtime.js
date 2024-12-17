'use strict';
module.exports = (sequelize, DataTypes) => {
  const Showtime = sequelize.define('Showtime', {
    movie_start_time: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    show_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    showtime_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    price_per_seat: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  return Showtime;
};

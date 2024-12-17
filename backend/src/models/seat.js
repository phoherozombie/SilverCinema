'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define('Seat', {
    name: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  });

  return Seat;
};

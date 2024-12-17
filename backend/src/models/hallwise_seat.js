'use strict';
module.exports = (sequelize, DataTypes) => {
  const HallwiseSeat = sequelize.define('HallwiseSeat', {
    hall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  HallwiseSeat.associate = function (models) {
    HallwiseSeat.belongsTo(models.Hall, { foreignKey: 'hall_id' });
    HallwiseSeat.belongsTo(models.Seat, { foreignKey: 'seat_id' });
  };

  return HallwiseSeat;
};

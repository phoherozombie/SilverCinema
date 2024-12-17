'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hall = sequelize.define('Hall', {
    name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    total_seats: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    theatre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Hall.associate = function (models) {
    Hall.belongsTo(models.Theatre, { foreignKey: 'theatre_id' });
  };

  return Hall;
};

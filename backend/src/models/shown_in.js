'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShownIn = sequelize.define('ShownIn', {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showtime_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hall_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  ShownIn.associate = function (models) {
    ShownIn.belongsTo(models.Movie, { foreignKey: 'movie_id' });
    ShownIn.belongsTo(models.Showtime, { foreignKey: 'showtime_id' });
    ShownIn.belongsTo(models.Hall, { foreignKey: 'hall_id' });
  };

  return ShownIn;
};

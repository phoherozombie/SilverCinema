'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieDirector = sequelize.define('MovieDirector', {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    director: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });

  MovieDirector.associate = function (models) {
    MovieDirector.belongsTo(models.Movie, { foreignKey: 'movie_id' });
  };

  return MovieDirector;
};

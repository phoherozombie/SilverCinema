'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });

  MovieGenre.associate = function (models) {
    MovieGenre.belongsTo(models.Movie, { foreignKey: 'movie_id' });
  };

  return MovieGenre;
};

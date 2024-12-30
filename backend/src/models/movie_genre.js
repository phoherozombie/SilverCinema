'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    genre: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });

  return MovieGenre;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    image_path: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    synopsis: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: true
    },
    duration: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    top_cast: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  });

  return Movie;
};

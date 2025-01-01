'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // Define associations here if required
    }
  }

  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      image_path: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      synopsis: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      rating: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: true,
      },
      duration: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      top_cast: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Movie',
      tableName: 'movie',
      timestamps: false,
    }
  );

  return Movie;
};

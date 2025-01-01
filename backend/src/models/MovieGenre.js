'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MovieGenre extends Model {
    static associate(models) {
      // Define associations here
      MovieGenre.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie',
      });
    }
  }

  MovieGenre.init(
    {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Movie', // Name of the related table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      genre: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'MovieGenre',
      tableName: 'movie_genre',
      timestamps: false,
    }
  );

  return MovieGenre;
};

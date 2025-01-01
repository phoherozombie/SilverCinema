'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MovieDirectors extends Model {
    static associate(models) {
      // Define associations here
      MovieDirectors.belongsTo(models.Movie, {
        foreignKey: 'movie_id',
        as: 'movie',
      });
    }
  }

  MovieDirectors.init(
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
      director: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'MovieDirectors',
      tableName: 'movie_directors',
      timestamps: false,
    }
  );

  return MovieDirectors;
};

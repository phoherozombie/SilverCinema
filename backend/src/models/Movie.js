const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.MovieGenre, {
        foreignKey: 'movie_id',
        as: 'genres',
      });
    }
  }

  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      image_path: DataTypes.STRING,
      language: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      rating: DataTypes.DECIMAL(2, 1),
      duration: DataTypes.STRING,
      top_cast: DataTypes.STRING,
      release_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Movie',
      tableName: 'movie',
      timestamps: true,
    }
  );

  return Movie;
};

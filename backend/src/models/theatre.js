'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theatre extends Model {
    static associate(models) {
      // Define associations here
      Theatre.hasMany(models.Hall, {
        foreignKey: 'theatre_id',
        as: 'halls',
      });
      Theatre.hasMany(models.Features, {
        foreignKey: 'theatre_id',
        as: 'features',
      });
    }
  }

  Theatre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      location_details: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Theatre',
      tableName: 'theatre',
      timestamps: false,
    }
  );

  return Theatre;
};

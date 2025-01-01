'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Features extends Model {
    static associate(models) {
      // Define associations here
      // For example: Features belongs to Theatre
      Features.belongsTo(models.Theatre, {
        foreignKey: 'theatre_id',
        as: 'theatre',
      });
    }
  }

  Features.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      image_path: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      theatre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Theatre', // Name of the related table
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Features',
      tableName: 'features',
      timestamps: false,
    }
  );

  return Features;
};

'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hall extends Model {
    static associate(models) {
      // Define associations here
      // For example: Hall belongs to Theatre
      Hall.belongsTo(models.Theatre, {
        foreignKey: 'theatre_id',
        as: 'theatre',
      });
    }
  }

  Hall.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      total_seats: {
        type: DataTypes.INTEGER,
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
      modelName: 'Hall',
      tableName: 'hall',
      timestamps: false,
    }
  );

  return Hall;
};

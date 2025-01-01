'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      // Define associations here
      Person.hasMany(models.Payment, {
        foreignKey: 'customer_email',
        as: 'payments',
      });
    }
  }

  Person.init(
    {
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      last_name: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.CHAR(11),
        allowNull: true,
      },
      account_balance: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      person_type: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'person',
      timestamps: false,
    }
  );

  return Person;
};

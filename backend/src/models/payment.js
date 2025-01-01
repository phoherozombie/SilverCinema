'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // Define associations here
      Payment.belongsTo(models.Person, {
        foreignKey: 'customer_email',
        as: 'customer',
      });
    }
  }

  Payment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      method: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      customer_email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        references: {
          model: 'Person', // Name of the related table
          key: 'email',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Payment',
      tableName: 'payment',
      timestamps: false,
    }
  );

  return Payment;
};

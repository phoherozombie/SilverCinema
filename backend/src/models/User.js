'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    account_balance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    person_type: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    type_account: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: 'customer'
    }
  });

  return User;
};
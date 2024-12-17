'use strict';
module.exports = (sequelize, DataTypes) => {
  const Theatre = sequelize.define('Theatre', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    location_details: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  });

  return Theatre;
};

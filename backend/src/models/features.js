'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    image_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    theatre_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Feature.associate = function (models) {
    Feature.belongsTo(models.Theatre, { foreignKey: 'theatre_id' });
  };

  return Feature;
};

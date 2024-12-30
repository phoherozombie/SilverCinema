// backend/src/models/avatar.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define('Avatar', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'uploads/avatars/default-avatar.png'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Avatar.associate = function(models) {
    Avatar.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Avatar;
};
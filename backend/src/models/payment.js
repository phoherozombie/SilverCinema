'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    payment_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    customer_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });

  Payment.associate = function (models) {
    Payment.belongsTo(models.User, { foreignKey: 'customer_email' });
  };

  return Payment;
};

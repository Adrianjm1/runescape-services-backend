// const { DataTypes, Model } = require('sequelize');
// const db = require('../../database/domain');

// class Payment extends Model {}
// Payment.init({
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false
//   },
//   amountUSD: {
//     type: DataTypes.DECIMAL(8,2),
//     allowNull: false
//   },
//   referenceNumber: {
//     type: DataTypes.STRING(30),
//     allowNull: true
//   },
//   date: {
//     type: DataTypes.STRING(15),
//     allowNull: false
//   },


// }, {sequelize: db, modelName: 'payment'});

// module.exports = Payment;
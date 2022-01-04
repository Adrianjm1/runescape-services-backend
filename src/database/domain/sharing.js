const Payments = require('../../payments/domain/model');
const User = require('../../user/domain/model');


// Bill - Payments: One to Many
Payments.hasOne(User, {foreignKey: 'idUser'});
User.belongsTo(Payments, {foreignKey: 'idUser'});

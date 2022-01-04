const { Sequelize } = require('sequelize');

// Dirección de la DB.
module.exports = new Sequelize('rservices', 'root', '', { host: 'localhost', dialect: 'mysql' });
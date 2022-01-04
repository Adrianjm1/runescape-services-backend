const Router = require('express').Router();

Router.use('/payments', require('./payments/controllers/router.js'));

Router.use('/user', require('./user/controllers/router.js'));

Router.use('/skills', require('./skills/controllers/router.js'));


module.exports = Router
const Database = require('../domain');
require('../domain/sharing');

// sync
async function init() {
  try {
    await Database.sync({ alter: true})
    console.log(`Base de datos conectada`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = init;
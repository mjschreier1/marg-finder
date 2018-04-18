const environment = process.env.NODE_ENV || `development`;
const config = require(`./knexfile.js`);
const knex = require(`knex`)(config[environment]);

module.exports = knex;
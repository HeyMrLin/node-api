const Sequelize = require('sequelize');
const config = require('../config/default');

const database = config.database;
const { HOST, USERNAME, PASSWORD, DATABASE } = database;
const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
});

module.exports = {
  sequelize,
}
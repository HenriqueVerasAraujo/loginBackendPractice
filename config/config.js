require('dotenv').config();
const pg = require('pg');

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    dialectModule: pg,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    dialectModule: pg,

  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB,
    host: process.env.HOSTNAME,
    dialect: 'postgres',
    dialectModule: pg,
  },
};
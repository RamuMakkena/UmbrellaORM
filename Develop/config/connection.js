require('dotenv').config();
const Sequelize = require('sequelize');

const JAWSDB_URL = process.env.JAWSDB_URL;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PW = process.env.DB_PW;

  const sequelize = JAWSDB_URL
  ? new Sequelize(JAWSDB_URL)
  : new Sequelize(DB_NAME, DB_USER, DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  
    
module.exports =sequelize;

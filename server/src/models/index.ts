const Sequelize = require('sequelize')
const fs = require('fs') // Read Filesystem
const path = require('path') // Access Path
const config = require('../config/config')

const db = {}

export const sequelize = new Sequelize(
    config.db.database, config.db.username, config.db.password, config.db.options
    // 'database', 'username', 'password', { // aka options {}
    // host: 'localhost',
    // dialect: 'sqlite' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    // }
);

module.exports = db;
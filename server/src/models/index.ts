import { Sequelize, DataTypes } from 'sequelize';
const config = require('../config/config');
const fs = require('fs'); // Read Filesystem

// const path = require('path'); // Access Path


// https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript
interface iDb {
    sequelize: Sequelize,
    Sequelize: Function,
    [key: string]: any
}


export const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db.options
    // 'database', 'username', 'password', { // aka options {}
    // host: 'localhost',
    // dialect: 'sqlite' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    // }
);

const modelMap = {};
fs
    .readdirSync(__dirname)
    .filter((file: string) =>
        file !== 'index.js'
    )
    .forEach((file: string) => {
        /* eslint-disable */
        const model = require(`${__dirname}/${file}`)(sequelize);
        // @ts-ignore
        modelMap[model.name] = model;
    });


export const db: iDb = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    ...modelMap
};

import { monitorEventLoopDelay } from "perf_hooks"

import { Sequelize, Model, DataTypes } from 'sequelize';
const fs = require('fs') // Read Filesystem
const path = require('path') // Access Path
const config = require('../config/config')


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

let modelMap = {}
fs
    .readdirSync(__dirname)
    .filter((file: string) =>
        file !== 'index.js'
    )
    .forEach((file: string) => {
        // @ts-ignore
        const model = require(`${__dirname}/${file}`)(sequelize, DataTypes);
        // @ts-ignore
        modelMap[model.name] = model;
    });


export const db: iDb = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    ...modelMap
}

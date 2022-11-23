import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';
// Process JSON easily
import bodyParser from 'body-parser';
// Prettify Logs 
import morgan from 'morgan';
import { db } from './models/index'
import routes from './routes'
import config from './config/config'

// dotenv.config();

const app: Express = express();

// Middelware Registration
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

routes(app);

// console.log(sequelize);
const host = config.host;
const port = config.port;

db.sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            // let display_host = host === "0.0.0.0" ? "localhost" : host

            let display_host = host === "0.0.0.0" ? "localhost" : host;
            console.log(`⚡️[server]: Server is running at http://${display_host}:${port}`);
        });
    });

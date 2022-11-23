import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// Process JSON easily
import bodyParser from 'body-parser';
// Prettify Logs 
import morgan from 'morgan';
import { sequelize } from './models'
import routes from './routes'

dotenv.config();

const app: Express = express();

// Middelware Registration
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

routes(app);


console.log(sequelize);

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";



sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            // let display_host = host === "0.0.0.0" ? "localhost" : host

            let display_host = host === "0.0.0.0" ? "localhost" : host;
            console.log(`⚡️[server]: Server is running at http://${display_host}:${port}`);
        });
    });



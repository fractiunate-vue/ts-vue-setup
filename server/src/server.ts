import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// Process JSON easily
import bodyParser from 'body-parser';
// Prettify Logs 
import morgan from 'morgan';

dotenv.config();

const app: Express = express();

// Middelware Registration
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.get('/healthcheck', (req: Request, res: Response) => {
    res.send({ status: "Ok", code: 200 })
});

app.post('/register', (req: Request, res: Response) => {
    res.send({
        message: `Hello ${req.body.email}! Your registration was successful!`
    });
});

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://${host}:${port}`);
});


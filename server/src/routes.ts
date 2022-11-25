import express, { Request, Response } from 'express';
import { register } from './controllers/AuthenticationController';
import { registerPolicy } from './policies/AuthenticationControllerPolicy';
export default (app: express.Express) => {
    app.get('/healthcheck', (req: Request, res: Response) => {
        console.log("hi");

        res.send({ status: "Ok", code: 200 });
    });
    app.post('/register',
        registerPolicy,
        register);
    app.get('/', (req: Request, res: Response) => {
        res.send('Express1 + TypeScript Server');
    });
};
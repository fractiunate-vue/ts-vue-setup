import express, { Request, Response } from 'express';

export default (app: express.Express) => {
    app.get('/healthcheck', (req: Request, res: Response) => {
        console.log("hi");

        res.send({ status: "Ok", code: 200 })
    });
    app.post('/register', (req: Request, res: Response) => {
        res.send({
            message: `Hello ${req.body.email}! Your registration was successful!`
        });
    });
    app.get('/', (req: Request, res: Response) => {
        res.send('Express1 + TypeScript Server');
    });
}
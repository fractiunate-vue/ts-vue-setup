import express, { Request, Response } from 'express';
import { db } from '../models/index';

const { User } = db;
export async function register(req: Request, res: Response) {
    try {
        const user = await User.create(req.body)
        res.send(user.toJSON());
    }
    catch (error) {
        let status = 400;
        res.status(status).send({
            message: 'This email account is invalid or in use.',
            error,
            status
        })
    }
}

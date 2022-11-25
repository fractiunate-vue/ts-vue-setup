import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function registerPolicy(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        email: Joi.string().email(),
        password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}'))
    });

    console.log(req.body);

    // const { error, value } = schema.validate(req.body);
    const { error } = schema.validate(req.body);
    if (error) {
        switch (error.details[0].context?.key) {
            case 'email':
                res.status(400).send({
                    error: 'You must provide a valid email address',
                    validationError: `${error}`
                });
                break;
            case 'password':
                res.status(400).send({
                    error: `The password providded failed to match the following rules:
                    <br>
                    1. It Must contain ONLY the following charackters: lower case, upper case
                    <br>
                    2. It must be at least 8 charackters in length and not greater then 32 charackters`
                });
                break;
            default:
                res.status(400).send({ error });
                break;
        }

    } else {
        next();
    }

}

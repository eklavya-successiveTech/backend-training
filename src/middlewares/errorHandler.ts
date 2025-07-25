import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) =>{

    console.log(`${err.name}: ${err.message}`);

    res.status(505).json({
        error: "Something went wrong",
        message: err.message
    })
}
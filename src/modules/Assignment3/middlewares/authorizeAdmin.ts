import{ Request, Response, NextFunction} from "express";
import createError from 'http-errors';

export const authorizeAdmin = ( req: Request, res: Response, next: NextFunction)=>{
    const user = (req as any).user;
    if(!user || user.role !== "Admin"){
        return next(createError(403, 'You do not have permission'));
    }
    next();
}
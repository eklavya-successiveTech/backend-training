import{ Request, Response, NextFunction} from "express";

export const authorizeAdmin = ( req: Request, res: Response, next: NextFunction)=>{
    const user = (req as any).user;
    if(!user || user.role !== "Admin"){
        return res.status(403).json({
            error: "Access denied. Admins only!"
        })
    }
    next();
}
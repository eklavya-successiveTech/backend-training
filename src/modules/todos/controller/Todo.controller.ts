import { Request, Response, NextFunction } from "express";
import { TodoService } from "../services/Todo.services";
import { AuthenticateRequest } from "../../../middlewares/authMiddleware";
import createError from "http-errors";

export class TodoController {
    static async createTodo(req: AuthenticateRequest, res: Response, next: NextFunction){
        try{
            const { title, description } = req.body;
            const userId = req.user?.id;

            if(!userId){
                return res.status(401).json({
                    success: false,
                    message: "User not authenticated",
                })
            }
            const todo = await TodoService.createTodo( userId, title, description );

            res.status(201).json({
                success: true,
                message: "Todo created successfully",
                data: todo,
            });
        }
        catch(err){
            next(err);
        }
    }

    static async getTodo(req: AuthenticateRequest, res: Response, next: NextFunction){
        try{
            if(req.user?.role !== 'admin'){
                throw createError(400, "User not authorized");
            }
            const limit = parseInt(req.query.limit as string) || 10;
            const offset = parseInt(req.query.offset as string) || 0;

            if(limit <= 0 || offset < 0){
                throw createError(400, "Limit and offset must be greater than 0")
            }

            const todos = await TodoService.getTodo(limit, offset);

             res.status(200).json({
                status: true,
                data: todos,
                pagination:{
                    limit,
                    offset 
                }
             });
        }
        catch(err){
            next(err);
        }
    }
}
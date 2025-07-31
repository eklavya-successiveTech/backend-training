import createError from "http-errors";
import { ITodo, TodoModel } from "../models/Todo.model";
import { Types } from 'mongoose';

export class TodoService {
    static async createTodo(userId: string, title: string, description?: string): Promise<ITodo>{
        if(!Types.ObjectId.isValid(userId)){
            throw createError(400,'Invalid User id');
        }

        const todo = new TodoModel({
            title,
            description,
            user: userId,
        });

        return await todo.save();
    }

    static async getTodo(limit: number, offset: number){
        return TodoModel.find()
        .sort({createdAt: -1})
        .skip(offset)
        .limit(limit);
    }
}
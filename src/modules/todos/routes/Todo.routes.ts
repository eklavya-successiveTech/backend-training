import express from "express";
import { authenticate } from "../../../middlewares/authMiddleware";
import { TodoController } from "../controller/Todo.controller";
import { validateRequest } from "../../../middlewares/validateRequest";
import { createTodoSchema } from "../validators/todoSchema";

const router = express.Router();

router.post('/', authenticate, validateRequest(createTodoSchema), TodoController.createTodo);
router.get('/', authenticate, TodoController.getTodo);

export default router;
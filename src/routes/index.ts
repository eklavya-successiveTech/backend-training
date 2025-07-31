import express from 'express';
import userRoutes from '../modules/users/routes/User.route';
import todoRoutes from '../modules/todos/routes/Todo.routes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/todo', todoRoutes);

export default router;
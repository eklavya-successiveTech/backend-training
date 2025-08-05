import { Router, Request, Response, NextFunction } from 'express';
import { userSchema } from '../../../utils/validationSchemas';
import { ValidationMiddleware } from '../../../middlewares/ValidationMiddleware';
import { UserModel } from '../../../models/User.model';
import bcrypt from 'bcrypt';
import createError from 'http-errors';

const validationRouter = Router();

validationRouter.post(
  '/register',
  ValidationMiddleware.validateBody(userSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password } = req.body;

    try {
      const existing = await UserModel.findOne({ email });
      if (existing) {
        return next(createError(409, 'User already exists with this email')); 
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new UserModel({ username, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (err) {
      next(err); 
    }
  }
);

export default validationRouter;

import { Router, Request, Response } from 'express';
import { userSchema } from '../../../utils/validationSchemas';
import { ValidationMiddleware } from '../../../middlewares/ValidationMiddleware';
import { UserModel } from '../../../models/User.model';
import bcrypt from 'bcrypt';

const validationRouter = Router();

validationRouter.post(
  '/register',
  ValidationMiddleware.validateBody(userSchema),
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    try {
      const existing = await UserModel.findOne({ email });
      if (existing) {
        return res.status(409).json({ error: 'User already exists with this email.' });
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
      res.status(500).json({ error: 'Internal server error' });
    }
  }
);

export default validationRouter;

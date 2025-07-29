import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenSchema } from '../utils/tokenSchema';
import createError from 'http-errors';

const SECRET = 'my_dummy_secret_key';

export class AuthMiddleware {
  static authenticate(req: Request, res: Response, next: NextFunction): void | Response{
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return next(createError(401, 'Token is missing'));
    }

    try {
      const decoded = jwt.verify(token, SECRET);

      const { error, value } = tokenSchema.validate(decoded);

      if (error) {
        return res.status(403).json({ error: `Invalid token payload: ${error.details[0].message}` });
      }

      (req as any).user = value; 
      next();
    } catch (err) {
      return next(createError(401, 'Invalid token'));
    }
  }
}

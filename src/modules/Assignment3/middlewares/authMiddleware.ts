import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { tokenSchema } from '../utils/tokenSchema';

const SECRET = 'my_dummy_secret_key';

export class AuthMiddleware {
  static authenticate(req: Request, res: Response, next: NextFunction): void | Response{
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
      res.status(401).json({ error: 'No token provided' });
      return;
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
      res.status(403).json({ error: 'Invalid token' });
    }
  }
}

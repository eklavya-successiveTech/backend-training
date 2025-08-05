import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = 'my_dummy_secret_key';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, SECRET);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

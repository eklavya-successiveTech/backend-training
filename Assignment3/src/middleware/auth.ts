import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// You should store this in a .env file in a real-world app
const SECRET_KEY = 'your_secret_key';

export interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

export function authenticateToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    req.user = user;
    next();
  });
}

import { Request, Response, NextFunction } from 'express';

export class RoleMiddleware {
  static allow(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = (req as any).user; 
      if (!user || !allowedRoles.includes(user.role)) {
        return res.status(403).json({ error: 'Access denied. Insufficient role.' });
      }

      next();
    };
  }
}

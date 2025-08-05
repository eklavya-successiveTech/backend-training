import { Request, Response, NextFunction } from 'express';

interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

const requestCounts = new Map<string, { count: number; startTime: number }>();

export const rateLimiter = ({ windowMs, maxRequests }: RateLimitOptions) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip: string = req.ip ?? 'unknown';

    const now = Date.now();
    const existing = requestCounts.get(ip);

    if (!existing) {
      requestCounts.set(ip, { count: 1, startTime: now });
      return next();
    }

    const timePassed = now - existing.startTime;

    if (timePassed < windowMs) {

      if (existing.count >= maxRequests) {
        return res.status(429).json({
          error: `Too many requests. Please wait ${Math.ceil((windowMs - timePassed) / 1000)}s.`,
        });
      }

      existing.count += 1;
      return next();
    }

    requestCounts.set(ip, { count: 1, startTime: now });
    return next();
  };
};

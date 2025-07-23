import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;

  console.error(`[${req.method}] ${req.originalUrl} -> ${err.name}: ${err.message}`);

  res.status(status).json({
    error: {
      message: err.message || 'Internal Server Error',
      status,
    },
  });
};

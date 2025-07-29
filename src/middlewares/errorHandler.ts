import { Request, Response, NextFunction } from 'express';
import { customError } from '../modules/Assignment5/interfaces/customError';

export const errorHandler = (
  err: customError,
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

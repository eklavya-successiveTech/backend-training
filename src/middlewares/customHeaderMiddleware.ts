import { Request, Response, NextFunction } from 'express';
const headerName = 'X-App-Name';
const headerValue = 'MyExpressApp';

export const addCustomHeader = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.setHeader(headerName, headerValue);
  next();
};
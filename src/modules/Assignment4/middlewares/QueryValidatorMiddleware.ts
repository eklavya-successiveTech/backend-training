import { Request, Response, NextFunction } from 'express';

export class QueryValidatorMiddleware {
  static ensureNumericQueryParams(params: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      for (const param of params) {
        const value = req.query[param];

        if (value !== undefined && isNaN(Number(value))) {
          return res.status(400).json({
            error: `Query parameter '${param}' must be a number.`,
          });
        }
      }

      next();
    };
  }
}

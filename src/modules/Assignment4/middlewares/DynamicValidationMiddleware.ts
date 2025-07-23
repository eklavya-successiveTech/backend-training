import { Request, Response, NextFunction } from 'express';
import { validationRules } from '../config/validationRules';

export default class DynamicValidationMiddleware {
  static validate(routePath: string, source: 'body' | 'query' = 'body') {
    return (req: Request, res: Response, next: NextFunction) => {
      const schema = validationRules[routePath];

      if (!schema) {
        return res.status(500).json({
          error: `No validation schema found for route "${routePath}".`,
        });
      }

      const { error } = schema.validate(req[source]);

      if (error) {
        return res.status(400).json({
          error: error.details[0].message,
        });
      }

      next();
    };
  }
}

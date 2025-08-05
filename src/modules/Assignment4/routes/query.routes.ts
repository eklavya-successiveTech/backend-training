import { Router, Request, Response } from 'express';
import { QueryValidatorMiddleware } from '../middlewares/QueryValidatorMiddleware';

const router = Router();

router.get(
  '/query-check',
  QueryValidatorMiddleware.ensureNumericQueryParams(['page', 'limit']),
  (req: Request, res: Response) => {
    const { page, limit } = req.query;
    res.status(200).json({
      message: 'Query parameters are valid numbers',
      page: Number(page),
      limit: Number(limit),
    });
  }
);

export default router;

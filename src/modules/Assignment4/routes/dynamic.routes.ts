import { Router, Request, Response } from 'express';
import DynamicValidationMiddleware  from '../middlewares/DynamicValidationMiddleware';

const router = Router();

router.post(
  '/dynamic/register',
  DynamicValidationMiddleware.validate('/dynamic/register', 'body'),
  (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    res.status(200).json({ message: 'Registration data valid', user: { username, email } });
  }
);

router.get(
  '/dynamic/query-check',
  DynamicValidationMiddleware.validate('/dynamic/query-check', 'query'),
  (req: Request, res: Response) => {
    const { page, limit } = req.query;
    res.status(200).json({ message: 'Query params valid', page, limit });
  }
);

export default router;

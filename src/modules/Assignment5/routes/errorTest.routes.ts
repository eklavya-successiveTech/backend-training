import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import Joi from 'joi';

const router = Router();

router.get('/bad-request', (req: Request, res: Response, next: NextFunction) => {
  next(createError(400, 'Bad Request Example'));
});

router.get('/unauthorized', (req: Request, res: Response, next: NextFunction) => {
  next(createError(401, 'Unauthorized Access'));
});

router.get('/forbidden', (req: Request, res: Response, next: NextFunction) => {
  next(createError(403, 'Access Forbidden'));
});

router.get('/server-error', (req: Request, res: Response) => {
  throw new Error('Server crashed unexpectedly!');
});

router.get('/async-error', async (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new Error('This is an async error!');
  } catch (err) {
    next(err);
  }
});

router.get('/validate-user', (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).required(),
  });

  const { error } = schema.validate(req.query);

  if (error) {
    return next(createError(400, `Validation Error: ${error.details[0].message}`));
  }

  res.json({ message: 'Valid user!', username: req.query.username });
});

export default router;

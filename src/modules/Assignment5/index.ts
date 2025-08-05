import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import errorTestRoutes from './routes/errorTest.routes';

const router = express.Router();

router.use('/', errorTestRoutes);
router.get('/fail', (req: Request, res: Response, next: NextFunction) => {
  next(createError(403, 'Forbidden!'));
});

export default router;


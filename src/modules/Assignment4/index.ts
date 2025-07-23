import { Router } from 'express';
import validationRouter from './routes/validation.routes';
import queryRouter from "./routes/query.routes";
import geoRoutes from "./routes/geo.routes";
import dynamicRoutes from "./routes/dynamic.routes";
import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

const router = Router();

router.use('/', validationRouter);
router.use('/',queryRouter);
router.use('/',geoRoutes);
router.use('/', dynamicRoutes);

router.get('/fail', (req: Request, res: Response, next: NextFunction) => {
  next(createError(403, 'Forbidden!'));
});
export default router;

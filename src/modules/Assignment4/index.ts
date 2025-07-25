import { Router } from 'express';
import validationRouter from './routes/validation.routes';
import queryRouter from "./routes/query.routes";
import geoRoutes from "./routes/geo.routes";
import dynamicRoutes from "./routes/dynamic.routes";

const router = Router();

router.use('/', validationRouter);
router.use('/',queryRouter);
router.use('/',geoRoutes);
router.use('/', dynamicRoutes);
export default router;

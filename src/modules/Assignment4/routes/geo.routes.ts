import { Router, Request, Response } from 'express';
import { GeoValidationMiddleware } from '../middlewares/GeoValidationMiddleware';

const router = Router();

router.get(
  '/location-check',
  GeoValidationMiddleware.allowOnlyFromCountry('IN'),
  (req: Request, res: Response) => {
    res.status(200).json({ message: 'Access granted from valid region (India)' });
  }
);

export default router;

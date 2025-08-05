import express from 'express';

import adminRoutes from './routes/adminRoutes';
import mockRoutes from './routes/mockRoutes';

import { AuthMiddleware } from './middlewares/authMiddleware';
import { Request, Response } from 'express';

const router = express.Router();


router.get('/test', (req, res) => {
  res.send('pong');
});

router.use('/', mockRoutes);

router.use('/', adminRoutes);

router.get('/protected', AuthMiddleware.authenticate, (req: Request, res: Response) => {
  res.json({
    message: 'You accessed protected data!',
    user: (req as any).user,
  });
});

router.get('/test-error', (req: Request, res: Response) => {
  throw new Error('Intentional test error!');
});

export default router;

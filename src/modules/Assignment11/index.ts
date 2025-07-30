import { Router } from 'express';
import { AuthMiddleware } from '../../modules/Assignment3/middlewares/authMiddleware';
import { RoleMiddleware } from './middleware/roleMiddleware';


const router = Router();
router.get(
  '/admin-data',
  AuthMiddleware.authenticate,
  RoleMiddleware.allow(['admin']), 
  (req, res) => {
    res.json({ message: 'Secret admin data', user: (req as any).user });
  }
);
export default router;
import { Router, Request, Response } from 'express';
import { mockUsers } from './MockData'; 

const router = Router();

router.get('/users', (req: Request, res: Response) => {
  res.json(mockUsers);
});

export default router;
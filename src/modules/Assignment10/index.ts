import { Router } from 'express';
import { AuthController } from './controllers/auth.controller';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/test', (req, res) => {
  res.send('Assignment 10 route working!');
});


export default router;

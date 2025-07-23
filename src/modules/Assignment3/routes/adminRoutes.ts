import express from 'express';
import { AuthMiddleware } from '../middlewares/authMiddleware';
import { authorizeAdmin } from '../middlewares/authorizeAdmin';
import { loggerMiddleware } from '../../../middlewares/loggerMiddleware';

const router = express.Router();

router.get('/admin',
    loggerMiddleware,
    AuthMiddleware.authenticate,
    authorizeAdmin,
    (req, res)=>{
        res.json({
            message: 'Welcome Admin',
            user: (req as any).user
        })
    }
)
export default router;
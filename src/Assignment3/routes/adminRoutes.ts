import express,{Request, Response} from 'express';
import { authenticate } from '../middlewares/authMiddleware';
import { authorizeAdmin } from '../middlewares/authorizeAdmin';
import { loggerMiddleware } from '../middlewares/loggerMiddleware';

const router = express.Router();

router.get('/admin',
    loggerMiddleware,
    authenticate,
    authorizeAdmin,
    (req: Request, res: Response)=>{
        res.json({
            message: 'Welcome Admin',
            user: (req as any).user
        })
    }
)
export default router;
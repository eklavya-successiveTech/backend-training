import express from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler';
import { Request, Response } from 'express';
import { authenticate } from './middlewares/authMiddleware';
import adminRoutes from './routes/adminRoutes'
import { addCustomHeader } from './middlewares/customHeaderMiddleware';
import  mockRoutes  from './routes/mockRoutes'


const app = express();

app.use(express.json());
app.use(cookieParser());


app.get('/',(req: Request,res: Response)=>{
    res.send("Middleware working")
})

app.use(addCustomHeader);

app.use('/api', mockRoutes)

app.get('/api/protected', authenticate, (req: Request, res: Response) => {
  res.json({
    message: 'You accessed protected data!',
    user: (req as any).user,
  });
})

app.use('/api', adminRoutes);

app.get('/api/test-error', (req: Request, res: Response) => {
  throw new Error('Intentional test error!');
});

app.use(errorHandler);
export default app;
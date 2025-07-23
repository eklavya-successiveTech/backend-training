// src/app.ts
import express from 'express';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/index'; 
import { errorHandler } from './middlewares/errorHandler';
import { addCustomHeader } from './middlewares/customHeaderMiddleware';
import { rateLimiter } from './middlewares/rateLimiter';
import createError from 'http-errors';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(addCustomHeader);
app.use(rateLimiter({windowMs: 15000, maxRequests: 5}))

app.get('/', (req, res) => {
  res.send('Backend server is up and running!');
});

app.use('/api', mainRouter);

app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});
app.use(errorHandler);

export default app;

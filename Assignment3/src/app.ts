import express from 'express';
import { authenticateToken } from './middleware/auth';

const app = express();

app.use(express.json());

// Protected route
app.get('/protected', authenticateToken, (req: any, res: { json: (arg0: { message: string; }) => void; }) => {
  res.json({ message: 'You are authorized!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

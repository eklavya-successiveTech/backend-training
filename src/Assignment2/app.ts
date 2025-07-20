import { mockUsers } from '../MockData'
import cookieParser from 'cookie-parser';
import express, { Request, Response } from "express"

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/api/users', (req, res) => {
  res.json(mockUsers);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
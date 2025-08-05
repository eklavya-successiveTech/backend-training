import express from 'express';
import { getMockUsers } from '../../../utils/mockData';

const router = express.Router();

router.post('/mock-users', (req, res) => {
  const data = getMockUsers();
  res.json({ users: data });
});

export default router;

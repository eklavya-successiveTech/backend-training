import express from 'express';

import assignment3Routes from '../modules/Assignment3/index';
import assignment4Routes from '../modules/Assignment4/index';
import assignment5Routes from '../modules/Assignment5/index';

const router = express.Router();

router.use('/assignment3', assignment3Routes);
router.use('/assignment4', assignment4Routes);
router.use('/assignment5', assignment5Routes);

router.get('/healthCheck', (req, res) => {
  res.send('Health CHeck successful');
});

export default router;

import express from 'express';

import assignment3Routes from '../modules/Assignment3/index';
import assignment4Routes from '../modules/Assignment4/index';

const router = express.Router();

router.use('/assignment3', assignment3Routes);
router.use('/assignment4', assignment4Routes);

router.get('/ping', (req, res) => {
  res.send('pong');
});

export default router;

import express from 'express';

import assignment3Routes from '../modules/Assignment3/index';

const router = express.Router();

router.use('/assignment3', assignment3Routes);

router.get('/ping', (req, res) => {
  res.send('pong');
});

export default router;

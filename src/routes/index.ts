import express from 'express';

import assignment3Routes from '../modules/Assignment3/index';
import assignment4Routes from '../modules/Assignment4/index';
import assignment5Routes from '../modules/Assignment5/index';
import assignment2Routes from '../modules/Assignment2/index';

const router = express.Router();

router.use('/assignment2', assignment2Routes);
router.use('/assignment3', assignment3Routes);
router.use('/assignment4', assignment4Routes);
router.use('/assignment5', assignment5Routes);

router.get('/ping', (req, res) => {
  res.send('pong');
});

export default router;

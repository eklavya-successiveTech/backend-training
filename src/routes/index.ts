import express from 'express';

import assignment3Routes from '../modules/Assignment3/index';
import assignment4Routes from '../modules/Assignment4/index';
import assignment5Routes from '../modules/Assignment5/index';
import assignment10Routes from '../modules/Assignment10/index';
import assignment11Routes from '../modules/Assignment11/index';
import assignment2Routes from '../modules/Assignment2/index';


const router = express.Router();

router.use('/assignment2', assignment2Routes);
router.use('/assignment3', assignment3Routes);
router.use('/assignment4', assignment4Routes);
router.use('/assignment5', assignment5Routes);
router.use('/assignment10', assignment10Routes);
router.use('/assignment11', assignment11Routes);

router.get('/healthCheck', (req, res) => {
  res.send('Health CHeck successful');
});

export default router;

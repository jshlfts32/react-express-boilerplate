import express from 'express';

const router = express.Router();

router.get('/api/test', (req, res) => {
  res.send({ test: 'This is a test!' });
});

export default router;

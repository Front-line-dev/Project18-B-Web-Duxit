import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json({ title: 'Express' });
});

export default router;

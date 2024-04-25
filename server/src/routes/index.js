import express from 'express';
const router = express.Router();
import v0 from './v0.js';

router.use('/v0', v0);

export default router;

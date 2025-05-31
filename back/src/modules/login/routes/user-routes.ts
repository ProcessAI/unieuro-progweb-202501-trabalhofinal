import express from 'express';
import { register, login } from '../../../../user.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;

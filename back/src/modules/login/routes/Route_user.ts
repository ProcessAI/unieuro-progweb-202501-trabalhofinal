import { Router } from 'express';
import { registerUser, loginUser } from '../service/User'

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
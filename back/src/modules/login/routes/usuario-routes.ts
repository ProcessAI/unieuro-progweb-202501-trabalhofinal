import { Router } from 'express';
import { registerUser, loginUser } from '../service/usuario-service'

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
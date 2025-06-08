import { Router } from 'express';
import { authMiddleware } from '../authMiddleware';

const router = Router();

router.get('/protegida', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Acesso permitido à rota protegida!', user: req.user });
});

export default router;

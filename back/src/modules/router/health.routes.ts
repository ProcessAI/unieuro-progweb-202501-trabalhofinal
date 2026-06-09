import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response): void => {
  req.log.info('Health check executado');

  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;
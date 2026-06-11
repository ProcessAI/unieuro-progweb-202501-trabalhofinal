import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { auditLogger } from '../../logger';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

/**
 * Middleware de Auditoria — registra ações sensíveis (POST, PUT, DELETE)
 * e tentativas de acesso com informações do usuário, IP e resultado.
 */
export function auditMiddleware(req: Request, res: Response, next: NextFunction) {
  // Só audita requisições que modificam dados
  const auditMethods = ['POST', 'PUT', 'DELETE', 'PATCH'];
  if (!auditMethods.includes(req.method)) {
    return next();
  }

  const startTime = Date.now();

  // Tenta extrair o userId do token JWT (sem bloquear se não houver)
  let userId: number | string = 'anonymous';
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET) as { idusuario?: number };
      if (decoded.idusuario) {
        userId = decoded.idusuario;
      }
    } catch {
      // Token inválido — será registrado como 'invalid-token'
      userId = 'invalid-token';
    }
  }

  // Intercepta o fim da resposta para registrar o statusCode
  const originalEnd = res.end.bind(res);
  // @ts-ignore — override intencional para capturar o statusCode final
  res.end = function (this: Response, chunk?: any, encoding?: BufferEncoding, cb?: () => void) {
    const duration = Date.now() - startTime;

    const auditEntry = {
      audit: true,
      action: `${req.method} ${req.originalUrl}`,
      method: req.method,
      path: req.originalUrl,
      userId,
      ip: req.ip || req.socket.remoteAddress || 'unknown',
      statusCode: res.statusCode,
      durationMs: duration,
      userAgent: req.headers['user-agent'] || 'unknown',
      timestamp: new Date().toISOString(),
    };

    // Loga com nível diferente baseado no resultado
    if (res.statusCode >= 400) {
      auditLogger.warn(auditEntry, `AUDIT: ${req.method} ${req.originalUrl} → ${res.statusCode}`);
    } else {
      auditLogger.info(auditEntry, `AUDIT: ${req.method} ${req.originalUrl} → ${res.statusCode}`);
    }

    return originalEnd(chunk, encoding as any, cb);
  } as any;

  next();
}

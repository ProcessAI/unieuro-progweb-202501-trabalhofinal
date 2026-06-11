import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../persistence/usuario-persistence';
import { auditLogger } from '../../../logger';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function registerUser(req: Request, res: Response) {
  const { usuarioemail, usuariosenha } = req.body;
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

  try {
    const existingUser = await findUserByEmail(usuarioemail);
    if (existingUser) {
      auditLogger.warn({
        audit: true,
        event: 'REGISTER_DUPLICATE',
        email: usuarioemail,
        ip: clientIp,
        timestamp: new Date().toISOString(),
      }, `Tentativa de cadastro com e-mail já existente: ${usuarioemail}`);
      res.status(400).json({ message: 'Usuário já existe' });
      return;
    }

    const hashedPassword = await bcrypt.hash(usuariosenha, 10);
    const user = await createUser(usuarioemail, hashedPassword);

    auditLogger.info({
      audit: true,
      event: 'REGISTER_SUCCESS',
      email: usuarioemail,
      userId: user.idusuario,
      ip: clientIp,
      timestamp: new Date().toISOString(),
    }, `Novo usuário registrado: ${usuarioemail}`);

    res.status(201).json({ message: 'Usuário criado com sucesso', user });
    return;
  } catch (error) {
    auditLogger.error({
      audit: true,
      event: 'REGISTER_ERROR',
      email: usuarioemail,
      ip: clientIp,
      error: String(error),
      timestamp: new Date().toISOString(),
    }, `Erro ao registrar usuário: ${usuarioemail}`);
    console.error('Erro no registerUser:', error);
    res.status(500).json({ message: 'Erro interno', error });
    return;
  }
}

export async function loginUser(req: Request, res: Response) {
  const { usuarioemail, usuariosenha } = req.body;
  const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

  try {
    const user = await findUserByEmail(usuarioemail);
    if (!user) {
      auditLogger.warn({
        audit: true,
        event: 'LOGIN_USER_NOT_FOUND',
        email: usuarioemail,
        ip: clientIp,
        timestamp: new Date().toISOString(),
      }, `Tentativa de login com e-mail inexistente: ${usuarioemail}`);
      res.status(400).json({ message: 'Usuário não encontrado' });
      return;
    }

    const isValid = await bcrypt.compare(usuariosenha, user.usuariosenha);
    if (!isValid) {
      auditLogger.warn({
        audit: true,
        event: 'LOGIN_INVALID_PASSWORD',
        email: usuarioemail,
        userId: user.idusuario,
        ip: clientIp,
        timestamp: new Date().toISOString(),
      }, `Senha inválida para: ${usuarioemail}`);
      res.status(401).json({ message: 'Senha inválida' });
      return;
    }

    const token = jwt.sign({ idusuario: user.idusuario }, JWT_SECRET, { expiresIn: '1h' });

    auditLogger.info({
      audit: true,
      event: 'LOGIN_SUCCESS',
      email: usuarioemail,
      userId: user.idusuario,
      ip: clientIp,
      timestamp: new Date().toISOString(),
    }, `Login bem-sucedido: ${usuarioemail}`);

    res.status(200).json({ message: 'Login bem-sucedido', token });
    return;
  } catch (error) {
    auditLogger.error({
      audit: true,
      event: 'LOGIN_ERROR',
      email: usuarioemail,
      ip: clientIp,
      error: String(error),
      timestamp: new Date().toISOString(),
    }, `Erro no login: ${usuarioemail}`);
    res.status(500).json({ message: 'Erro interno', error });
    return;
  }
}
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../persistence/usuario-persistence';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function registerUser(req: Request, res: Response) {
  const { usuarioemail, usuariosenha } = req.body;

  try {
    const existingUser = await findUserByEmail(usuarioemail);
    if (existingUser) {
      res.status(400).json({ message: 'Usuário já existe' });
      return;
    }

    const hashedPassword = await bcrypt.hash(usuariosenha, 10);
    const user = await createUser(usuarioemail, hashedPassword);

    res.status(201).json({ message: 'Usuário criado com sucesso', user });
    return;
  } catch (error) {
    console.error('Erro no registerUser:', error);
    res.status(500).json({ message: 'Erro interno', error });
    return;
  }
}

export async function loginUser(req: Request, res: Response) {
  const { usuarioemail, usuariosenha } = req.body;

  try {
    const user = await findUserByEmail(usuarioemail);
    if (!user) {
      res.status(400).json({ message: 'Usuário não encontrado' });
      return;
    }

    const isValid = await bcrypt.compare(usuariosenha, user.usuariosenha);
    if (!isValid) {
      res.status(401).json({ message: 'Senha inválida' });
      return;
    }

    const token = jwt.sign({ idusuario: user.idusuario }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login bem-sucedido', token });
    return;
  } catch (error) {
    res.status(500).json({ message: 'Erro interno', error });
    return;
  }
}
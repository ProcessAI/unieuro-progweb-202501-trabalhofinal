import { Request, Response } from 'express';
import prisma from '../persistence/user-persistence';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const register = async (req: Request, res: Response) => {
  const { nome, email, senha, cpf } = req.body;

  try {
    const existe = await prisma.usuario.findUnique({ where: { email } });
    if (existe) return res.status(400).json({ erro: 'Email já cadastrado' });

    const senha_hash = await bcrypt.hash(senha, 10);

    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha_hash,
        cpf
      }
    });

    return res.status(201).json(user);
  } catch (err: any) {
    return res.status(500).json({ erro: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaValida) return res.status(401).json({ erro: 'Senha inválida' });

    const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }
    });
  } catch (err: any) {
    return res.status(500).json({ erro: err.message });
  }
};

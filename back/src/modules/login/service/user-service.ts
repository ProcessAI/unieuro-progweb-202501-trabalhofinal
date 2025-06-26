import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const prisma = new PrismaClient();
export const register = async (req: Request, res: Response) => {
  const { nome, email, senha, cpf } = req.body;

  try {
    const existe = await prisma.usuario.findFirst({ where: { usuarioemail: email } });
    if (existe) return res.status(400).json({ erro: 'Email já cadastrado' });

    const senha_hash = await bcrypt.hash(senha, 10);

    const user = await prisma.usuario.create({
      data: {
        usuarioemail: email,
        usuariosenha: senha_hash,
        usuariostatus: 1
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
    const usuario = await prisma.usuario.findFirst({ where: { usuarioemail: email } });
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

    const senhaValida = await bcrypt.compare(senha, usuario.usuariosenha);
    if (!senhaValida) return res.status(401).json({ erro: 'Senha inválida' });

    const token = jwt.sign({ id: usuario.idusuario }, JWT_SECRET, { expiresIn: '1h' });

    return res.json({
      token,
      usuario: {
        id: usuario.idusuario,
        nome: usuario.usuarioemail,
        email: usuario.usuarioemail
      }
    });
  } catch (err: any) {
    return res.status(500).json({ erro: err.message });
  }
};

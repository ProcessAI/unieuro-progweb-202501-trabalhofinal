import { PrismaClient } from '../database/generated/prisma';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export async function criarCliente(req: Request, res: Response) {
  const { nome, status } = req.body;
  try {
    const cliente = await prisma.cliente.create({
      data: {
        clientenome: nome,
        clientestatus: status,
      },
    });
    // Converte idcliente BigInt para Number
    const clienteConvertido = {
      ...cliente,
      idcliente: Number(cliente.idcliente),
    };
    res.status(201).json(clienteConvertido);
  } catch (err) {
    console.error('Erro ao criar cliente:', err);
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
}

export async function listarClientes(req: Request, res: Response) {
  try {
    const clientes = await prisma.cliente.findMany();
    const clientesConvertidos = clientes.map(cliente => ({
      ...cliente,
      idcliente: Number(cliente.idcliente),
    }));
    res.json(clientesConvertidos);
  } catch (err) {
    console.error('Erro ao listar clientes:', err);
    res.status(500).json({ error: "Erro ao listar clientes" });
  }
}

export async function buscarCliente(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const cliente = await prisma.cliente.findUnique({ where: { idcliente: BigInt(id) } });
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });

    const clienteConvertido = {
      ...cliente,
      idcliente: Number(cliente.idcliente),
    };
    res.json(clienteConvertido);
  } catch (err) {
    console.error('Erro ao buscar cliente:', err);
    res.status(500).json({ error: "Erro ao buscar cliente" });
  }
}

export async function atualizarCliente(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const { nome, status } = req.body;
  try {
    const cliente = await prisma.cliente.update({
      where: { idcliente: BigInt(id) },
      data: {
        clientenome: nome,
        clientestatus: status,
      },
    });

    const clienteConvertido = {
      ...cliente,
      idcliente: Number(cliente.idcliente),
    };
    res.json(clienteConvertido);
  } catch (err) {
    console.error('Erro ao atualizar cliente:', err);
    res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
}

export async function deletarCliente(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    await prisma.cliente.delete({ where: { idcliente: BigInt(id) } });
    res.status(204).send();
  } catch (err) {
    console.error('Erro ao deletar cliente:', err);
    res.status(500).json({ error: "Erro ao deletar cliente" });
  }
}

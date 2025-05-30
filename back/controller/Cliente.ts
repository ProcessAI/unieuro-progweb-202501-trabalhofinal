import { PrismaClient} from '../database/generated/prisma';
import {Request,Response} from 'express';

/* 

    Definindo uma variável constante chamada prisma que ira resceber um novo objeto:    
    chamado new PrismaClient();
*/

const prisma = new PrismaClient();

/*
const index = function(request: Request, response:Response){
    response.send('Faça o teste, vá no seu navegador, coloque localhost:3000 e de enter! Tararaaaa Teste realizado com sucesso');
}; 
*/

export async function criarCliente(req: Request, res: Response) {
  const { nome, status } = req.body;
  try {
    const cliente = await prisma.cliente.create({
      data: { nome, status },
    });
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
}

export async function listarClientes(req: Request, res: Response) {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: "Erro ao listar clientes" });
  }
}

export async function buscarCliente(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    const cliente = await prisma.cliente.findUnique({ where: { id } });
    if (!cliente) return res.status(404).json({ error: "Cliente não encontrado" });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar cliente" });
  }
}

export async function atualizarCliente(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const { nome, status } = req.body;
  try {
    const cliente = await prisma.cliente.update({
      where: { id },
      data: { nome, status },
    });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
}

export async function deletarCliente(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  try {
    await prisma.cliente.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar cliente" });
  }
}
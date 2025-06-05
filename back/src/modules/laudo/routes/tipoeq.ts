import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import {create,findAll,findById,update,deletetipoeq} from '../service/tipoeqservice'

const prisma = new PrismaClient();
const router = Router();

// Listar todos os tipos de equipamento
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const tipos = findAll ()
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipos de equipamento' });
  }
});

// Buscar tipo de equipamento por id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const tipos = findById (id)
    if (!tipos) {
      res.status(404).json({ error: 'Tipo não encontrado' });
    } else {
      res.json(tipos);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipo' });
  }
});

// Criar novo tipo de equipamento
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { tipoeqnome } = req.body;
  try {
    const novoTipo = create (tipoeqnome)
    res.status(201).json(novoTipo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tipo' });
  }
});

// Atualizar tipo de equipamento pelo id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { tipoeqnome } = req.body;
  try {
    const tipoAtualizado = update (id,tipoeqnome)
    res.json(tipoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tipo' });
  }
});

// Deletar tipo de equipamento pelo id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    deletetipoeq (id)
    res.json({ message: 'Tipo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tipo' });
  }
});

export default router;

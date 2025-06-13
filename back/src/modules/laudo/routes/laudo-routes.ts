import { Router, Request, Response } from 'express';
import { Laudo } from '../model/laudo-model';
import {
  findAll,
  findById,
  create,
  update,
  deleteLaudo
} from '../service/laudo-service';

const router = Router();

// Listar todos os laudos
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const laudos = await findAll();
    res.json(laudos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar laudos' });
  }
});

// Buscar laudo por id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const laudo = await findById(id);
    if (!laudo) {
      res.status(404).json({ error: 'Laudo não encontrado' });
    } else {
      res.json(laudo);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar laudo' });
  }
});

// Criar novo laudo
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { titulo, descricao, tipoEquipamentoId } = req.body;
  try {
    const novoLaudo = await create({ titulo, descricao, tipoEquipamentoId });
    res.status(201).json(novoLaudo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar laudo' });
  }
});

// Atualizar laudo pelo id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { titulo, descricao, tipoEquipamentoId } = req.body;
  try {
    const laudoAtualizado = await update(id, { titulo, descricao, tipoEquipamentoId });
    if (!laudoAtualizado) {
      res.status(404).json({ error: 'Laudo não encontrado' });
    } else {
      res.json(laudoAtualizado);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar laudo' });
  }
});

// Deletar laudo pelo id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await deleteLaudo(id);
    res.json({ message: 'Laudo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar laudo' });
  }
});

export default router;
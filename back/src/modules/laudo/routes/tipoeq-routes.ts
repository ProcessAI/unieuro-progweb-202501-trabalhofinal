import { Router, Request, Response } from 'express';
import {
  create,
  findAll,
  findById,
  update,
  deleteTipoEquipamento
} from '../service/tipoeq-service';

const router = Router();

// Listar todos os tipos de equipamento
router.get('/listarTipoEquipamento', async (req: Request, res: Response): Promise<void> => {
  try {
    const tipos = await findAll();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipos de equipamento' });
  }
});

// Buscar tipo de equipamento por id
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    const tipo = await findById(id);
    if (!tipo) {
      res.status(404).json({ error: 'Tipo não encontrado' });
    } else {
      res.json(tipo);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tipo' });
  }
});

// Criar novo tipo de equipamento
router.post('/criarTipoEquipamento', async (req: Request, res: Response): Promise<void> => {
  const { tipoeqnome } = req.body;
  try {
    const novoTipo = await create({ tipoeqnome });
    res.status(201).json(novoTipo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tipo' });
  }
});

// Atualizar tipo de equipamento pelo id
router.put('/atualizarTipoEquipamento/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const { tipoeqnome } = req.body;
  try {
    const tipoAtualizado = await update(id, { tipoeqnome });
    res.json(tipoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tipo' });
  }
});

// Deletar tipo de equipamento pelo id
router.delete('/deletarTipoEquipamento/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await deleteTipoEquipamento(id);
    res.json({ message: 'Tipo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tipo' });
  }
});

export default router;

import { Router, Request, Response } from 'express';
import {
<<<<<<< HEAD
  createTipoEquipamento,
  findAllTiposEquipamento,
  findTipoEquipamentoById,
  updateTipoEquipamento,
=======
  create,
  findAll,
  findById,
  update,
>>>>>>> 47082b25964ca7a9f2c42fd3d76f3459f115f289
  deleteTipoEquipamento
} from '../service/tipoeq-service';

const router = Router();

// Listar todos os tipos de equipamento
<<<<<<< HEAD
router.get('/', (req: Request, res: Response) => {
  res.json(findAllTiposEquipamento());
});

// Buscar tipo de equipamento por id
router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const tipo = findTipoEquipamentoById(id);
  if (!tipo) return res.status(404).json({ error: 'Tipo de equipamento não encontrado' });
  res.json(tipo);
});

// Criar novo tipo de equipamento
router.post('/', (req: Request, res: Response) => {
  const { nome, descricao } = req.body;
  const novoTipo = createTipoEquipamento({ nome, descricao });
  res.status(201).json(novoTipo);
});

// Atualizar tipo de equipamento
router.put('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { nome, descricao } = req.body;
  const tipoAtualizado = updateTipoEquipamento(id, { nome, descricao });
  if (!tipoAtualizado) return res.status(404).json({ error: 'Tipo de equipamento não encontrado' });
  res.json(tipoAtualizado);
});

// Deletar tipo de equipamento
router.delete('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = deleteTipoEquipamento(id);
  if (!deleted) return res.status(404).json({ error: 'Tipo de equipamento não encontrado' });
  res.json({ message: 'Tipo de equipamento deletado com sucesso' });
});

export default router;
=======
router.get('/', async (req: Request, res: Response): Promise<void> => {
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
router.post('/', async (req: Request, res: Response): Promise<void> => {
  const { tipoeqnome } = req.body;
  try {
    const novoTipo = await create({ tipoeqnome });
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
    const tipoAtualizado = await update(id, { tipoeqnome });
    res.json(tipoAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tipo' });
  }
});

// Deletar tipo de equipamento pelo id
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  try {
    await deleteTipoEquipamento(id);
    res.json({ message: 'Tipo deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tipo' });
  }
});

export default router;
>>>>>>> 47082b25964ca7a9f2c42fd3d76f3459f115f289

import { Router, Request, Response } from 'express';
import {
  createTipoEquipamento,
  findAllTiposEquipamento,
  findTipoEquipamentoById,
  updateTipoEquipamento,
  deleteTipoEquipamento
} from '../service/tipoeq-service';

const router = Router();

// Listar todos os tipos de equipamento
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
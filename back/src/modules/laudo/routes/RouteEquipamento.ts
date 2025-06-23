import { Router, Request, Response } from 'express';
import { EquipamentoClass } from '../service/EquipamentoService';

const RouteEquipamento = Router();
const equipamentoService = new EquipamentoClass();

// Criar equipamento
RouteEquipamento.post('/', async (req: Request, res: Response) => {
  try {
    const equipamento = await equipamentoService.criarEquipamento(req.body);
    res.status(201).json(equipamento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Listar todos os equipamentos
RouteEquipamento.get('/', async (req: Request, res: Response) => {
  try {
    const equipamentos = await equipamentoService.listarEquipamentos();
    res.json(equipamentos);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Consultar equipamento por ID
RouteEquipamento.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const equipamento = await equipamentoService.ConsuEquipamento(id);

    if (!equipamento) {
      return res.status(404).json({ error: 'Equipamento não encontrado' });
    }

    res.json(equipamento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar equipamento
RouteEquipamento.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const equipamento = await equipamentoService.atualizarEquipamento(id, req.body);
    res.json(equipamento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default RouteEquipamento;

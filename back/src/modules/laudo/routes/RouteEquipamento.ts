import { Router, Request, Response } from 'express';
import { EquipamentoClass } from '../service/EquipamentoService';

const routeEquipamento = Router();
const equipamentoService = new EquipamentoClass();

/**
 * Criar novo equipamento
 */
routeEquipamento.post('/criarEquipamento', async (req: Request, res: Response) => {
  try {
    const novoEquipamento = await equipamentoService.criarEquipamento(req.body);
    return res.status(201).json(novoEquipamento);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

/**
 * Listar todos os equipamentos
 */
routeEquipamento.get('/', async (_req: Request, res: Response) => {
  try {
    const equipamentos = await equipamentoService.listarEquipamentos();

    if (!equipamentos || equipamentos.length === 0) {
      return res.status(404).json({ error: 'Nenhum equipamento encontrado.' });
    }

    return res.status(200).json(equipamentos);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

/**
 * Consultar equipamento por ID
 */
routeEquipamento.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const equipamento = await equipamentoService.consultarEquipamento(id);

    if (!equipamento) {
      return res.status(404).json({ error: 'Equipamento não encontrado.' });
    }

    return res.status(200).json(equipamento);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

/**
 * Atualizar equipamento
 */
routeEquipamento.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const atualizado = await equipamentoService.atualizarEquipamento(id, req.body);
    return res.status(200).json(atualizado);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

/**
 * Deletar equipamento
 */
routeEquipamento.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deletado = await equipamentoService.deletarEquipamento(id);
    return res.status(200).json(deletado);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

routeEquipamento.get('/tipos-equipamento', async (_req: Request, res: Response) => {
  try {
    const tipos = await equipamentoService.listarTiposEquipamento();
    return res.status(200).json(tipos);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

/**
 * Listar sedes
 */
routeEquipamento.get('/sedes', async (_req: Request, res: Response) => {
  try {
    const sedes = await equipamentoService.listarSedes();
    return res.status(200).json(sedes);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
});

export default routeEquipamento;

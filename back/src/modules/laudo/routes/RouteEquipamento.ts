import { Router, Request, Response } from 'express';
import { EquipamentoClass } from '../service/EquipamentoService';

const routeEquipamento = Router();
const equipamentoService = new EquipamentoClass();

/**
 * Criar novo equipamento
 */
routeEquipamento.post('/criarEquipamento', async (req: Request, res: Response): Promise<void> => {
  try {
    const novoEquipamento = await equipamentoService.criarEquipamento(req.body);
    res.status(201).json(novoEquipamento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Listar todos os equipamentos
 */
routeEquipamento.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const equipamentos = await equipamentoService.listarEquipamentos();

    /*if (!equipamentos || equipamentos.length === 0) {
      return res.status(404).json({ error: 'Nenhum equipamento encontrado.' });
    
      isso está retornando erro de graça kkkk
    }*/

    res.status(200).json(equipamentos);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Consultar equipamento por ID
 */
routeEquipamento.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const equipamento = await equipamentoService.consultarEquipamento(id);

    if (!equipamento) {
      res.status(404).json({ error: 'Equipamento não encontrado.' });
      return;
    }

    res.status(200).json(equipamento);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Atualizar equipamento
 */
routeEquipamento.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const atualizado = await equipamentoService.atualizarEquipamento(id, req.body);
    res.status(200).json(atualizado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Deletar equipamento
 */
routeEquipamento.delete('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const deletado = await equipamentoService.deletarEquipamento(id);
    res.status(200).json(deletado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

routeEquipamento.get('/tipos-equipamento', async (_req: Request, res: Response): Promise<void> => {
  try {
    const tipos = await equipamentoService.listarTiposEquipamento();
    res.status(200).json(tipos);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Listar sedes
 */
routeEquipamento.get('/sedes', async (_req: Request, res: Response): Promise<void> => {
  try {
    const sedes = await equipamentoService.listarSedes();
    res.status(200).json(sedes);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default routeEquipamento;

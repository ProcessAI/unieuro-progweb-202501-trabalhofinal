import { Router, Request, Response } from 'express';
import { TipoInstalacaoService } from '../service/tipo-de-instalacao-service';


const router = Router();
const service = new TipoInstalacaoService();

// CREATE
router.post('/', async (req, res) => {
  try {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar tipo de instalação', detalhes: err });
  }
});

// READ ALL
router.get('/', async (_req: Request, res: Response) => {
  const lista = await service.listar();
  res.json(lista);
});

// READ ONE
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const tipo = await service.buscarPorId(id);
  if (!tipo) {
    res.status(404).json({ erro: 'Tipo de instalação não encontrado' });
    return;
  }
  res.json(tipo);
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const atualizado = await service.atualizar(id, req.body);
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar', detalhes: err });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    await service.deletar(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar', detalhes: err });
  }
});

export default router;

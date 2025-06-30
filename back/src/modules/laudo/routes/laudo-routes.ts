import { Router, Request, Response } from 'express';
import {
  findAll,
  findById,
  create,
  update,
  deleteLaudo,

} from '../service/laudo-service';

const router = Router();

// Listar todos os laudos
router.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const laudos = await findAll();
    console.log("Laudos encontrados:", laudos);
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
  const {
    laudodescricao,
    laudohtmlmd,
    idtipolaudo,
    idtipoinstalacao,
    laudoosclickup,
    laudostatus,
    laudofechamento,
    imagens,
  } = req.body;

  console.log("Requisição recebida:", req.body);
  try {
    const novoLaudo = await create({
      laudodescricao,
      laudohtmlmd,
      idtipolaudo,
      idtipoinstalacao,
      laudoosclickup,
      laudostatus,
      laudofechamento,
      imagens: imagens || {}, // Imagens podem ser um objeto vazio se não forem fornecidas
    });
    res.status(201).json(novoLaudo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar laudo' });
  }
});

// Atualizar laudo pelo id
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
  const id = Number(req.params.id);
  const {
    laudodescricao,
    laudohtmlmd,
    idtipolaudo,
    idtipoinstalacao,
    laudoosclickup,
    laudofechamento,
    laudostatus 
  } = req.body;

  try {
    const laudoAtualizado = await update(id, {
      laudodescricao,
      laudohtmlmd,
      idtipolaudo,
      idtipoinstalacao,
      laudoosclickup,
      laudofechamento,
      laudostatus 
    });

    if (!laudoAtualizado) {
      res.status(404).json({ error: 'Laudo não encontrado' });
    } else {
      res.json(laudoAtualizado);
    }
  } catch (error) {
    console.error(error);
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

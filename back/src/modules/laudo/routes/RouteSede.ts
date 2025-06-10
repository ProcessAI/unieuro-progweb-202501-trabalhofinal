import express, { Request, Response } from 'express';
import { SedeService } from '../service/SedeService';

const sedeRouter = express.Router();
const service = new SedeService();

sedeRouter.get('/', async (req: Request, res: Response) => {
  try {
    const sedes = await service.listar();
    res.status(200).json(sedes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar sedes" });
  }
});

sedeRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const sede = await service.visualizarSede(id);
    if (!sede) {
      return res.status(404).json({ error: "Sede não encontrada" });
    }
    res.status(200).json(sede);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar sede" });
  }
});

sedeRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const sedeDeletada = await service.deletar(id);
    if (!sedeDeletada) {
      return res.status(404).json({ error: "Sede não encontrada" });
    }
    res.status(200).json({ message: "Sede deletada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar sede" });
  }
});

sedeRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const sedeAtualizada = await service.atualizar(id, req.body);
    if (!sedeAtualizada) {
      return res.status(404).json({ error: "Sede não encontrada" });
    }
    res.status(200).json(sedeAtualizada);
  } catch (error) {
    console.error(error); // <-- Adicione isso
    res.status(500).json({ error: "Erro ao atualizar sede" });
  }
});



export default sedeRouter;
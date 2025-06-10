import express, { Request, Response } from 'express';
import { EnderecoService } from '../service/EnderecoService';

const enderecoRouter = express.Router();
const service = new EnderecoService();

enderecoRouter.post('/', async (req: Request, res: Response) => {
  try {

    const {enderecoendereco, enderecocep, enderecolat, enderecolon, enderecostatus, idsede }=req.body
    const enderecoCriado = await service.criarEndereco({
      enderecoend:enderecoendereco,
      enderecocep:enderecocep,
      enderecolat:enderecolat,
      enderecolon:enderecolon,
      enderecostatus:enderecostatus,
      enderecosede:idsede
    });
    
    res.status(200).json(enderecoCriado)


  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

enderecoRouter.get('/', async (req: Request, res: Response) => {
  try {
    const enderecos = await service.listarEndereco();
    res.status(200).json(enderecos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

enderecoRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const idendereco = parseInt(req.params.id);
    const endereco = await service.visualizarEndereco(idendereco);
    if (!endereco) {
      return res.status(404).json({ "Aviso": "Endereço não encontrado" });
    }
    res.status(200).json(endereco);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar endereço" });
  }
});


enderecoRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const {enderecoendereco, enderecocep, enderecolat, enderecolon, enderecostatus, idsede }=req.body
    const idconvertido = Number(id);
    const enderecoAtualizado = await service.atualizarEndereco(idconvertido,{
      enderecoend:enderecoendereco,
      enderecocep:enderecocep,
      enderecolat:enderecolat,
      enderecolon:enderecolon,
      enderecostatus:enderecostatus,
      enderecosede:idsede
    });
    
   
    if (!enderecoAtualizado) {
      return res.status(404).json({ "Aviso": "Endereço não encontrado" });
    }
    res.status(200).json(enderecoAtualizado);
  } catch (error) {
    console.error(error); // <-- Adicione isso
    res.status(500).json({ error: "Erro ao atualizar endereço" });
  }
});


enderecoRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const enderecoDeletado = await service.deletarEndereco(id);
    if (!enderecoDeletado) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }
    res.status(200).json({ message: "Endereço deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar endereço" });
  }
});


export default enderecoRouter;
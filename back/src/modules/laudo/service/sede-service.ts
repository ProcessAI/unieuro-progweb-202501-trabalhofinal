import { Request, Response } from 'express';
import { SedePersistence } from '../persistence/sede-persistence';

const sedeManager = new SedePersistence();

// Criar sede
export async function createSede(req: Request, res: Response): Promise<void> {
  try {
    const { sedenome, idcliente, sedestatus } = req.body;

    if (!sedenome || !idcliente) {
      res.status(400).json({ message: 'Campos obrigatórios: sedenome e idcliente' });
      return;
    }

    const todasSedes = await sedeManager.findAll();
    const nomeExistente = todasSedes.find(
      (s) => s.sedenome.toLowerCase() === sedenome.toLowerCase()
    );

    if (nomeExistente) {
      res.status(409).json({ message: 'Já existe uma sede com esse nome' });
      return;
    }

    const sedeData = {
      sedenome,
      idcliente,
      ...(sedestatus !== undefined && { sedestatus })
    };

    const newSede = await sedeManager.create(sedeData);
    res.status(201).json({ message: 'Sede criada com sucesso', sede: newSede });
  } catch (error) {
    console.error('Erro em createSede:', error);
    res.status(500).json({ message: 'Erro ao criar sede', error });
  }
}

// Buscar todas as sedes
export async function getAllSedes(req: Request, res: Response): Promise<void> {
  try {
    const sedes = await sedeManager.findAll();
    res.status(200).json(sedes);
  } catch (error) {
    console.error('Erro em getAllSedes:', error);
    res.status(500).json({ message: 'Erro ao buscar sedes', error });
  }
}

// Buscar sede por ID
export async function getSedeById(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' });
    return;
  }

  try {
    const sede = await sedeManager.findById(id);
    if (!sede) {
      res.status(404).json({ message: 'Sede não encontrada' });
      return;
    }
    res.status(200).json(sede);
  } catch (error) {
    console.error('Erro em getSedeById:', error);
    res.status(500).json({ message: 'Erro ao buscar sede por ID', error });
  }
}

// Atualizar sede
export async function updateSede(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);
  const { sedenome, sedestatus } = req.body;

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' });
    return;
  }

  if (!sedenome && sedestatus === undefined) {
    res.status(400).json({ message: 'Nenhum campo fornecido para atualização' });
    return;
  }

  try {
    // Verifica se a sede existe
    const existingSede = await sedeManager.findById(id);
    if (!existingSede) {
      res.status(404).json({ message: 'Sede não encontrada' });
      return;
    }

    // Se sedenome for informado, valida se já existe em outra sede
    if (sedenome) {
      const allSedes = await sedeManager.findAll();
      const nomeDuplicado = allSedes.find(
        (s) => s.sedenome.toLowerCase() === sedenome.toLowerCase() && s.idsede !== id
      );
      if (nomeDuplicado) {
        res.status(409).json({ message: 'Já existe uma sede com esse nome' });
        return;
      }
    }

    const sedeData: any = {};
    if (sedenome) sedeData.sedenome = sedenome;
    if (sedestatus !== undefined) sedeData.sedestatus = sedestatus;

    const updatedSede = await sedeManager.update(id, sedeData);
    res.status(200).json({ message: 'Sede atualizada com sucesso', sede: updatedSede });
  } catch (error) {
    console.error('Erro em updateSede:', error);
    res.status(500).json({ message: 'Erro ao atualizar sede', error });
  }
}

// Deletar sede
export async function deleteSede(req: Request, res: Response): Promise<void> {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(400).json({ message: 'ID inválido' });
    return;
  }

  try {
    await sedeManager.delete(id);
    res.status(200).json({ message: 'Sede deletada com sucesso' });
  } catch (error) {
    console.error('Erro em deleteSede:', error);
    res.status(500).json({ message: 'Erro ao deletar sede', error });
  }
}

// Buscar sedes por ID do cliente
export async function getSedesByClienteId(req: Request, res: Response): Promise<void> {
  const idcliente = parseInt(req.params.idcliente);

  if (isNaN(idcliente)) {
    res.status(400).json({ message: 'ID do cliente inválido' });
    return;
  }

  try {
    const sedes = await sedeManager.findByClienteId(idcliente);
    res.status(200).json(sedes);
  } catch (error) {
    console.error('Erro em getSedesByClienteId:', error);
    res.status(500).json({ message: 'Erro ao buscar sedes do cliente', error });
  }
}

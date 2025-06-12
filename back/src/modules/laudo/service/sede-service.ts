import { Request, Response } from 'express';
import { SedePersistence } from '../persistence/sede-persistence';

const sedeManager = new SedePersistence();

// Criar sede
// Tentativas falhas de sede criam gastam id. Verificar se é do prisma
export async function createSede(req: Request, res: Response) {
  try {
    const { sedenome, idcliente, sedestatus } = req.body;

    if (!sedenome || !idcliente) {
      return res.status(400).json({ message: 'Campos obrigatórios: sedenome e idcliente' });
    }

    const sedeData = {
      sedenome,
      idcliente,
      ...(sedestatus !== undefined && { sedestatus })
    };

    const newSede = await sedeManager.create(sedeData);
    return res.status(201).json({ message: 'Sede criada com sucesso', sede: newSede });
  } catch (error) {
    console.error('Erro em createSede:', error);
    return res.status(500).json({ message: 'Erro ao criar sede', error });
  }
}


// Buscar todas as sedes
export async function getAllSedes(req: Request, res: Response) {
  try {
    const sedes = await sedeManager.findAll();
    return res.status(200).json(sedes);
  } catch (error) {
    console.error('Erro em getAllSedes:', error);
    return res.status(500).json({ message: 'Erro ao buscar sedes', error });
  }
}

// Buscar sede por ID
export async function getSedeById(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const sede = await sedeManager.findById(id);
    if (!sede) {
      return res.status(404).json({ message: 'Sede não encontrada' });
    }
    return res.status(200).json(sede);
  } catch (error) {
    console.error('Erro em getSedeById:', error);
    return res.status(500).json({ message: 'Erro ao buscar sede por ID', error });
  }
}

// Atualizar sede
export async function updateSede(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const sedeData = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const updatedSede = await sedeManager.update(id, sedeData);
    return res.status(200).json({ message: 'Sede atualizada com sucesso', sede: updatedSede });
  } catch (error) {
    console.error('Erro em updateSede:', error);
    return res.status(500).json({ message: 'Erro ao atualizar sede', error });
  }
}

// Deletar sede
export async function deleteSede(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    await sedeManager.delete(id);
    return res.status(200).json({ message: 'Sede deletada com sucesso' });
  } catch (error) {
    console.error('Erro em deleteSede:', error);
    return res.status(500).json({ message: 'Erro ao deletar sede', error });
  }
}

// Buscar sedes por ID do cliente
export async function getSedesByClienteId(req: Request, res: Response) {
  const idcliente = parseInt(req.params.idcliente);

  if (isNaN(idcliente)) {
    return res.status(400).json({ message: 'ID do cliente inválido' });
  }

  try {
    const sedes = await sedeManager.findByClienteId(idcliente);
    return res.status(200).json(sedes);
  } catch (error) {
    console.error('Erro em getSedesByClienteId:', error);
    return res.status(500).json({ message: 'Erro ao buscar sedes do cliente', error });
  }
}

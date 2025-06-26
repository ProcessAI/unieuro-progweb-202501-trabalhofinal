import { LaudoPersistence } from '../persistence/laudo-persistence';

const persistence = new LaudoPersistence();

export const create = async (data: {
  laudodescricao: string;
  laudohtmlmd: string;
  idtipolaudo: number;
  idtipoinstalacao: number;
  laudoosclickup?: string | null;
  laudostatus: number;
}) => {
  if (!data.idtipolaudo || data.idtipolaudo === 0) {
    throw new Error('Tipo de laudo inválido');
  }

  if (!data.idtipoinstalacao || data.idtipoinstalacao === 0) {
    throw new Error('Tipo de instalação inválido');
  }

  return await persistence.create({
    laudodescricao: data.laudodescricao,
    laudohtmlmd: data.laudohtmlmd,
    idtipolaudo: data.idtipolaudo,
    idtipoinstalacao: data.idtipoinstalacao,
    laudoosclickup: data.laudoosclickup ?? null,
    laudostatus: data.laudostatus, 
  });
};


export const findAll = async () => {
  return await persistence.findAll();
};

export const findById = async (id: number) => {
  return await persistence.findById(id);
};

export const update = async (
  id: number,
  data: {
    laudodescricao?: string;
    laudohtmlmd?: string;
    idtipolaudo?: number;
    idtipoinstalacao?: number;
    laudoosclickup?: string | null;
    laudofechamento?: Date | null;
    laudostatus?: number; 
  }
) => {
  return await persistence.update(id, data);
};

export const deleteLaudo = async (id: number) => {
  return await persistence.delete(id);
};

import { LaudoPersistence } from '../persistence/laudo-persistence';

const persistence = new LaudoPersistence();

export const create = async (data: {
  laudodescricao: string;
  laudohtmlmd: string;
  idtipolaudo: number;
  idtipoinstalacao: number;
  laudoosclickup?: string | null;
  laudostatus: number;
  laudofechamento?: string | Date | null;
}) => {
  if (!data.idtipolaudo || data.idtipolaudo === 0) {
    throw new Error('Tipo de laudo inválido');
  }

  if (!data.idtipoinstalacao || data.idtipoinstalacao === 0) {
    throw new Error('Tipo de instalação inválido');
  }

  let horarioConvertido: Date | undefined = undefined;

  if (data.laudofechamento) {
    // Junta com uma data fixa para criar um Date válido
    horarioConvertido = new Date(`1970-01-01T${data.laudofechamento}:00Z`);
  }

  return await persistence.create({
    laudodescricao: data.laudodescricao,
    laudohtmlmd: data.laudohtmlmd,
    idtipolaudo: data.idtipolaudo,
    idtipoinstalacao: data.idtipoinstalacao,
    laudoosclickup: data.laudoosclickup ?? null,
    laudostatus: data.laudostatus, 
    laudofechamento: horarioConvertido,
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

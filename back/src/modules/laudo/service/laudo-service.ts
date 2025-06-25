import { LaudoPersistence } from '../persistence/laudo-persistence';

const persistence = new LaudoPersistence();

export const create = async (data: {
  laudodescricao: string;
  laudohtmlmd: string;
  idtipolaudo: number;
  idtipoinstalacao: number;
  laudoosclickup?: string | null;
}) => {
  return await persistence.create({
    laudodescricao: data.laudodescricao,
    laudohtmlmd: data.laudohtmlmd,
    idtipolaudo: data.idtipolaudo,
    idtipoinstalacao: data.idtipoinstalacao,
    laudoosclickup: data.laudoosclickup ?? null,
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
  }
) => {
  return await persistence.update(id, data);
};

export const deleteLaudo = async (id: number) => {
  return await persistence.delete(id);
};

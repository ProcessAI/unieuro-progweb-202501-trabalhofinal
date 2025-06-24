// /back/src/modules/laudo/service/laudo-service.ts

import { LaudoPersistence } from '../persistence/laudo-persistence';

export const create = async (data: {
  laudodescricao: string;
  laudohtmlmd: string;
  idtipolaudo: number;
  idtipoinstalacao: number;
  laudoosclickup?: string | null;
  // se precisar, pode adicionar outros campos aqui
}) => {
  return await LaudoPersistence.create({
    laudodescricao: data.laudodescricao,
    laudohtmlmd: data.laudohtmlmd,
    idtipolaudo: data.idtipolaudo,
    idtipoinstalacao: data.idtipoinstalacao,
    laudoosclickup: data.laudoosclickup ?? null,
  });
};

export const findAll = async () => {
  return await LaudoPersistence.findAll();
};

export const findById = async (id: number) => {
  return await LaudoPersistence.findById(id);
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
  return await LaudoPersistence.update(id, data);
};

export const deleteLaudo = async (id: number) => {
  return await LaudoPersistence.delete(id);
};

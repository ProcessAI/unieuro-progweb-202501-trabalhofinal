export interface TipoEquipamento {
  id: number;
  nome: string;
  descricao: string;
}

let tiposEquipamento: TipoEquipamento[] = [];
let currentId = 1;

export const createTipoEquipamento = (data: Omit<TipoEquipamento, 'id'>): TipoEquipamento => {
  const novoTipo = { id: currentId++, ...data };
  tiposEquipamento.push(novoTipo);
  return novoTipo;
};

export const findAllTiposEquipamento = (): TipoEquipamento[] => tiposEquipamento;

export const findTipoEquipamentoById = (id: number): TipoEquipamento | undefined =>
  tiposEquipamento.find(tipo => tipo.id === id);

export const updateTipoEquipamento = (id: number, data: Partial<Omit<TipoEquipamento, 'id'>>): TipoEquipamento | undefined => {
  const index = tiposEquipamento.findIndex(tipo => tipo.id === id);
  if (index === -1) return undefined;
  tiposEquipamento[index] = { ...tiposEquipamento[index], ...data };
  return tiposEquipamento[index];
};

export const deleteTipoEquipamento = (id: number): boolean => {
  const index = tiposEquipamento.findIndex(tipo => tipo.id === id);
  if (index === -1) return false;
  tiposEquipamento.splice(index, 1);
  return true;
};
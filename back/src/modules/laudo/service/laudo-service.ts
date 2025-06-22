// filepath: /Users/danielzakhourjreige/Downloads/unieuro-progweb-202501-trabalhofinal-laudinho-5/back/src/modules/laudo/service/laudo-service.ts

export interface Laudo {
  id: number;
  titulo: string;
  descricao: string;
  tipoEquipamentoId: number;
}

let laudos: Laudo[] = [];
let currentId = 1;

export const create = (laudoData: Omit<Laudo, 'id'>): Laudo => {
  const newLaudo = { id: currentId++, ...laudoData };
  laudos.push(newLaudo);
  return newLaudo;
};

export const findAll = (): Laudo[] => laudos;

export const findById = (id: number): Laudo | undefined =>
  laudos.find(laudo => laudo.id === id);

export const update = (id: number, laudoData: Partial<Omit<Laudo, 'id'>>): Laudo | undefined => {
  const laudoIndex = laudos.findIndex(laudo => laudo.id === id);
  if (laudoIndex === -1) return undefined;
  laudos[laudoIndex] = { ...laudos[laudoIndex], ...laudoData };
  return laudos[laudoIndex];
};

export const deleteLaudo = (id: number): boolean => {
  const laudoIndex = laudos.findIndex(laudo => laudo.id === id);
  if (laudoIndex === -1) return false;
  laudos.splice(laudoIndex, 1);
  return true;
};
<<<<<<< HEAD
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
=======
import { Prisma } from "@prisma/client";
import { TipoEquipamentoPersistence } from "../persistence/tipoeq-persistence";

const tipoEquipamentoRepo = new TipoEquipamentoPersistence();

export async function create(tipoeqData: Prisma.tipoeqCreateInput) {
  return await tipoEquipamentoRepo.create(tipoeqData);
}

export async function findAll() {
  return await tipoEquipamentoRepo.findAll();
}

export async function findById(id: number) {
  console.log(id);
  return await tipoEquipamentoRepo.findById(id);
}

export async function update(id: number, tipoeqData: Prisma.tipoeqUpdateInput) {
  return await tipoEquipamentoRepo.update(id, tipoeqData);
}

export async function deleteTipoEquipamento(id: number) {
  return await tipoEquipamentoRepo.delete(id);
}
>>>>>>> 47082b25964ca7a9f2c42fd3d76f3459f115f289

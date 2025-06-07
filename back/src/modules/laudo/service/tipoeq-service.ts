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
  return await tipoEquipamentoRepo.findById(id);
}

export async function update(id: number, tipoeqData: Prisma.tipoeqUpdateInput) {
  return await tipoEquipamentoRepo.update(id, tipoeqData);
}

export async function deleteTipoEquipamento(id: number) {
  return await tipoEquipamentoRepo.delete(id);
}

<<<<<<< HEAD
// filepath: /Users/danielzakhourjreige/Downloads/unieuro-progweb-202501-trabalhofinal-laudinho-5/back/src/modules/laudo/model/laudo-model.ts

export interface Laudo {
  id: number;
  descricao: string;
  data: Date;
  tipoEquipamentoId: number; // Assuming a relationship with tipoeq
=======
import { PrismaClient, Prisma } from "@prisma/client";

export class TipoEquipamentoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(tipoEquipamentoData: Prisma.tipoeqCreateInput) {
    try {
      const tipoEquipamento = await this.prisma.tipoeq.create({
        data: tipoEquipamentoData,
      });
      return tipoEquipamento;
    } catch (error) {
      console.error("Erro ao criar tipoEquipamento:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const tiposEquipamento = await this.prisma.tipoeq.findMany();
      return tiposEquipamento;
    } catch (error) {
      console.error("Erro ao buscar todos os tipos de equipamento:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const tipoEquipamento = await this.prisma.tipoeq.findUnique({
        where: { idtipoeq: id },
      });
      return tipoEquipamento;
    } catch (error) {
      console.error("Erro ao buscar tipoEquipamento por ID:", error);
      throw error;
    }
  }

  async update(id: number, tipoEquipamentoData: Prisma.tipoeqUpdateInput) {
    try {
      const updatedTipoEquipamento = await this.prisma.tipoeq.update({
        where: { idtipoeq: id },
        data: tipoEquipamentoData,
      });
      return updatedTipoEquipamento;
    } catch (error) {
      console.error("Erro ao atualizar tipoEquipamento:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const deletedTipoEquipamento = await this.prisma.tipoeq.delete({
        where: { idtipoeq: id },
      });
      return deletedTipoEquipamento;
    } catch (error) {
      console.error("Erro ao deletar tipoEquipamento:", error);
      throw error;
    }
  }

  async findByNome(nome: string) {
    try {
      const tiposEquipamento = await this.prisma.tipoeq.findMany({
        where: {
          tipoeqnome: {
            contains: nome,
            mode: "insensitive",
          },
        },
      });
      return tiposEquipamento;
    } catch (error) {
      console.error("Erro ao buscar tipos de equipamento por nome:", error);
      throw error;
    }
  }
>>>>>>> 47082b25964ca7a9f2c42fd3d76f3459f115f289
}
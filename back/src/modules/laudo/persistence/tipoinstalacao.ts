import { PrismaClient } from "@prisma/client";

export class tipoinstalacaoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(tipoinstalacaoData: { tipoinstalacaonome: string; tipoinstalacaostatus?: number }) {
    try {
      const tipoinstalacao = await this.prisma.tipoinstalacao.create({
        data: tipoinstalacaoData,
      });
      return tipoinstalacao;
    } catch (error) {
      console.error("Error creating tipoinstalacao:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const tipoinstalacoes = await this.prisma.tipoinstalacao.findMany();
      return tipoinstalacoes;
    } catch (error) {
      console.error("Error fetching tipoinstalacoes:", error);
      throw error;
    }
  }

  async findById(id: bigint) {
    try {
      const tipoinstalacao = await this.prisma.tipoinstalacao.findUnique({
        where: { idtipoinstalacao: id },
      });
      return tipoinstalacao;
    } catch (error) {
      console.error("Error fetching tipoinstalacao by ID:", error);
      throw error;
    }
  }

  async update(id: bigint, tipoinstalacaoData: { tipoinstalacaonome?: string; tipoinstalacaostatus?: number }) {
    try {
      const updatedTipoinstalacao = await this.prisma.tipoinstalacao.update({
        where: { idtipoinstalacao: id },
        data: tipoinstalacaoData,
      });
      return updatedTipoinstalacao;
    } catch (error) {
      console.error("Error updating tipoinstalacao:", error);
      throw error;
    }
  }

  async delete(id: bigint) {
    try {
      const deletedTipoinstalacao = await this.prisma.tipoinstalacao.delete({
        where: { idtipoinstalacao: id },
      });
      return deletedTipoinstalacao;
    } catch (error) {
      console.error("Error deleting tipoinstalacao:", error);
      throw error;
    }
  }
}

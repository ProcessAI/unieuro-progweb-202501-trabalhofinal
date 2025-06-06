import { PrismaClient, Prisma } from "@prisma/client";

export class tipoInstalacaoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(tipoInstalacaoData: Prisma.tipoinstalacaoCreateInput) {
    try {
      const tipoInstalacao = await this.prisma.tipoinstalacao.create({
        data: tipoInstalacaoData,
      });
      return tipoInstalacao;
    } catch (error) {
      console.error("Erro ao criar tipo de instalação:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const tiposInstalacao = await this.prisma.tipoinstalacao.findMany();
      return tiposInstalacao;
    } catch (error) {
      console.error("Erro ao buscar tipos de instalação:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const tipoInstalacao = await this.prisma.tipoinstalacao.findUnique({
        where: { idtipoinstalacao: id },
      });
      return tipoInstalacao;
    } catch (error) {
      console.error("Erro ao buscar tipo de instalação por ID:", error);
      throw error;
    }
  }

  async update(id: number, tipoInstalacaoData: Prisma.tipoinstalacaoUpdateInput) {
    try {
      const updatedTipoInstalacao = await this.prisma.tipoinstalacao.update({
        where: { idtipoinstalacao: id },
        data: tipoInstalacaoData,
      });
      return updatedTipoInstalacao;
    } catch (error) {
      console.error("Erro ao atualizar tipo de instalação:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const deletedTipoInstalacao = await this.prisma.tipoinstalacao.delete({
        where: { idtipoinstalacao: id },
      });
      return deletedTipoInstalacao;
    } catch (error) {
      console.error("Erro ao deletar tipo de instalação:", error);
      throw error;
    }
  }
}
import { PrismaClient, Prisma } from "@prisma/client";

export class TipoLaudoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(tipoLaudoData: Prisma.tipolaudoCreateInput) {
    try {
      const tipoLaudo = await this.prisma.tipolaudo.create({
        data: tipoLaudoData,
      });
      return tipoLaudo;
    } catch (error) {
      console.error("Erro ao criar tipo de laudo:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const tiposLaudo = await this.prisma.tipolaudo.findMany();
      return tiposLaudo;
    } catch (error) {
      console.error("Erro ao buscar tipos de laudo:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const tipoLaudo = await this.prisma.tipolaudo.findUnique({
        where: { idtipolaudo: id },
      });
      return tipoLaudo;
    } catch (error) {
      console.error("Erro ao buscar tipo de laudo por ID:", error);
      throw error;
    }
  }

  async update(id: number, tipoLaudoData: Prisma.tipolaudoUpdateInput) {
    try {
      const updatedTipoLaudo = await this.prisma.tipolaudo.update({
        where: { idtipolaudo: id },
        data: tipoLaudoData,
      });
      return updatedTipoLaudo;
    } catch (error) {
      console.error("Erro ao atualizar tipo de laudo:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const deletedTipoLaudo = await this.prisma.tipolaudo.delete({
        where: { idtipolaudo: id },
      });
      return deletedTipoLaudo;
    } catch (error) {
      console.error("Erro ao deletar tipo de laudo:", error);
      throw error;
    }
  }

  async findByNome(nome: string) {
    try {
      const tiposLaudo = await this.prisma.tipolaudo.findMany({
        where: { 
          tipolaudonome: {
            contains: nome,
            mode: 'insensitive'
          }
        },
      });
      return tiposLaudo;
    } catch (error) {
      console.error("Erro ao buscar tipos de laudo por nome:", error);
      throw error;
    }
  }
}
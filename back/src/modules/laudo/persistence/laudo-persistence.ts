import { PrismaClient } from "@prisma/client";

export class LaudoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(laudoData: {
    titulo: string;
    descricao: string;
    usuarioId: number;
    dataCriacao?: Date;
  }) {
    try {
      const laudo = await this.prisma.laudo.create({
        data: {
          ...laudoData,
          dataCriacao: laudoData.dataCriacao ?? new Date(),
        },
      });
      return laudo;
    } catch (error) {
      console.error("Erro ao criar laudo:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.laudo.findMany({
        include: {
          usuario: true,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar laudos:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      return await this.prisma.laudo.findUnique({
        where: { id },
        include: {
          usuario: true,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar laudo por ID:", error);
      throw error;
    }
  }

  async update(
    id: number,
    laudoData: {
      titulo?: string;
      descricao?: string;
    }
  ) {
    try {
      const updatedLaudo = await this.prisma.laudo.update({
        where: { id },
        data: laudoData,
      });
      return updatedLaudo;
    } catch (error) {
      console.error("Erro ao atualizar laudo:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.laudo.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Erro ao deletar laudo:", error);
      throw error;
    }
  }

  async findByUsuarioId(usuarioId: number) {
    try {
      return await this.prisma.laudo.findMany({
        where: { usuarioId },
        include: {
          usuario: true,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar laudos por usuário:", error);
      throw error;
    }
  }
}
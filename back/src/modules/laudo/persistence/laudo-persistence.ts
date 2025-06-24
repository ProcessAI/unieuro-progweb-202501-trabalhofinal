import { PrismaClient, Prisma } from "@prisma/client";

export class LaudoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(laudoData: Prisma.laudoCreateInput) {
    try {
      const laudo = await this.prisma.laudo.create({ data: laudoData });
      return laudo;
    } catch (error) {
      console.error("Erro ao criar laudo:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.laudo.findMany();
    } catch (error) {
      console.error("Erro ao buscar laudos:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      return await this.prisma.laudo.findUnique({ where: { idlaudo: id } });
    } catch (error) {
      console.error("Erro ao buscar laudo por ID:", error);
      throw error;
    }
  }

  async update(id: number, laudoData: Prisma.laudoUpdateInput) {
    try {
      return await this.prisma.laudo.update({
        where: { idlaudo: id },
        data: laudoData,
      });
    } catch (error) {
      console.error("Erro ao atualizar laudo:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.laudo.delete({ where: { idlaudo: id } });
    } catch (error) {
      console.error("Erro ao deletar laudo:", error);
      throw error;
    }
  }
}

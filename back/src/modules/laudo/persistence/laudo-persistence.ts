import { PrismaClient } from "@prisma/client";

export class LaudoPersistence {
  private prisma: PrismaClient;
  
  constructor() {
    this.prisma = new PrismaClient();
  }
  
  async create(laudoData: {
    laudodescricao: string;
    laudohtmlmd: string;
    laudofechamento?: Date;
    laudostatus?: number;
    idtipolaudo: number;
    idtipoinstalacao: number;
    laudoosclickup?: string;
  }) {
    try {
      const laudo = await this.prisma.laudo.create({
        data: laudoData,
      });
      return laudo;
    } catch (error) {
      console.error("Erro ao criar laudo:", error);
      throw error;
    }
  }
  
  async findAll() {
    try {
      const laudos = await this.prisma.laudo.findMany();
      return laudos;
    } catch (error) {
      console.error("Erro ao buscar laudos:", error);
      throw error;
    }
  }
  
  async findById(id: number) {
    try {
      const laudo = await this.prisma.laudo.findUnique({
        where: { idlaudo: id },
      });
      return laudo;
    } catch (error) {
      console.error("Erro ao buscar laudo por ID:", error);
      throw error;
    }
  }
  
  async update(
    id: number,
    laudoData: {
      laudodescricao?: string;
      laudohtmlmd?: string;
      laudofechamento?: Date;
      laudostatus?: number;
      idtipolaudo?: number;
      idtipoinstalacao?: number;
      laudoosclickup?: string;
    }
  ) {
    try {
      const updatedLaudo = await this.prisma.laudo.update({
        where: { idlaudo: id },
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
      const deletedLaudo = await this.prisma.laudo.delete({
        where: { idlaudo: id },
      });
      return deletedLaudo;
    } catch (error) {
      console.error("Erro ao deletar laudo:", error);
      throw error;
    }
  }
}
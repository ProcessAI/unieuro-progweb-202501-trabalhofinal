import { PrismaClient, Prisma } from "@prisma/client";

export class equipamentoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(equipamentoData: Prisma.equipamentoCreateInput) {
    try {
      const equipamento = await this.prisma.equipamento.create({
        data: equipamentoData,
      });
      return equipamento;
    } catch (error) {
      console.error("Error creating equipamento:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const equipamentos = await this.prisma.equipamento.findMany();
      return equipamentos;
    } catch (error) {
      console.error("Error fetching equipamentos:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const equipamento = await this.prisma.equipamento.findUnique({
        where: { idequipamento: id },
      });
      return equipamento;
    } catch (error) {
      console.error("Error fetching equipamento by ID:", error);
      throw error;
    }
  }

  async update(id: number, equipamentoData: Prisma.equipamentoUpdateInput) {
    try {
      const updatedEquipamento = await this.prisma.equipamento.update({
        where: { idequipamento: id },
        data: equipamentoData,
      });
      return updatedEquipamento;
    } catch (error) {
      console.error("Error updating equipamento:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const deletedEquipamento = await this.prisma.equipamento.delete({
        where: { idequipamento: id },
      });
      return deletedEquipamento;
    } catch (error) {
      console.error("Error deleting equipamento:", error);
      throw error;
    }
  }
}
import { PrismaClient, Prisma } from "@prisma/client";

export class equipamentoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async listarTiposEquipamento() {
    return this.prisma.tipoeq.findMany({
      select: {
        idtipoeq: true,
        tipoeqnome: true,
      },
    });
  }

  async listarSedes() {
    return this.prisma.sede.findMany({
      select: {
        idsede: true,
        sedenome: true,
      },
    });
  }

  async create(equipamentoData: Prisma.equipamentoCreateInput) {
    try {
      const equipamento = await this.prisma.equipamento.create({
        data: equipamentoData,
        include: {
          tipoeq: true,
          sede: true,
        },
      });
      return equipamento;
    } catch (error) {
      console.error("Erro ao criar equipamento:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const equipamentos = await this.prisma.equipamento.findMany({
        include: {
          tipoeq: true,
          sede: true,
        },
      });
      return equipamentos;
    } catch (error) {
      console.error("Erro ao buscar equipamentos:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const equipamento = await this.prisma.equipamento.findUnique({
        where: { idequipamento: id },
        include: {
          tipoeq: true,
          sede: true,
        },
      });
      return equipamento;
    } catch (error) {
      console.error("Erro ao buscar equipamento por ID:", error);
      throw error;
    }
  }

  async update(id: number, equipamentoData: Prisma.equipamentoUpdateInput) {
    try {
      const equipamentoAtualizado = await this.prisma.equipamento.update({
        where: { idequipamento: id },
        data: equipamentoData,
        include: {
          tipoeq: true,
          sede: true,
        },
      });
      return equipamentoAtualizado;
    } catch (error) {
      console.error("Erro ao atualizar equipamento:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const equipamentoDeletado = await this.prisma.equipamento.delete({
        where: { idequipamento: id },
      });
      return equipamentoDeletado;
    } catch (error) {
      console.error("Erro ao deletar equipamento:", error);
      throw error;
    }
  }
}

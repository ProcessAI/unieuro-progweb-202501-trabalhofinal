import { PrismaClient, Prisma } from "@prisma/client";

export class SedePersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(sedeData: Prisma.sedeCreateInput) {
    try {
      const sede = await this.prisma.sede.create({
        data: sedeData,
      });
      return sede;
    } catch (error) {
      console.error("Erro ao criar sede:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const sedes = await this.prisma.sede.findMany({
        include: {
          endereco: true,
          equipamento: true,
          cliente: true,
        },
      });
      return sedes;
    } catch (error) {
      console.error("Erro ao buscar sedes:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const sede = await this.prisma.sede.findUnique({
        where: { idsede: id },
        include: {
          endereco: true,
          equipamento: true,
          cliente: true,
        },
      });
      return sede;
    } catch (error) {
      console.error("Erro ao buscar sede por ID:", error);
      throw error;
    }
  }

  async update(id: number, sedeData: Prisma.sedeUpdateInput) {
    try {
      const updatedSede = await this.prisma.sede.update({
        where: { idsede: id },
        data: sedeData,
      });
      return updatedSede;
    } catch (error) {
      console.error("Erro ao atualizar sede:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const deletedSede = await this.prisma.sede.delete({
        where: { idsede: id },
      });
      return deletedSede;
    } catch (error) {
      console.error("Erro ao deletar sede:", error);
      throw error;
    }
  }

  async findByClienteId(idcliente: number) {
    try {
      const sedes = await this.prisma.sede.findMany({
        where: { idcliente: idcliente },
        include: {
          endereco: true,
          equipamento: true,
        },
      });
      return sedes;
    } catch (error) {
      console.error("Erro ao buscar sedes por ID do cliente:", error);
      throw error;
    }
  }
}
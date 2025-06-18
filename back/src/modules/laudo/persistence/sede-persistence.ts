import { PrismaClient } from "@prisma/client";

export class SedePersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(sedeData: {
    sedenome: string;
    sedestatus?: number;
    idcliente: bigint | number;
    sededtinclusao?: Date;
  }) {
    try {
      const sede = await this.prisma.sede.create({
        data: {
          ...sedeData,
          idcliente: Number(sedeData.idcliente), // conversão explícita
        },
      });
      return sede;
    } catch (error) {
      console.error("Error creating sede:", error);
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
      console.error("Error fetching sedes:", error);
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
      console.error("Error fetching sede by ID:", error);
      throw error;
    }
  }

  async update(
    id: number,
    sedeData: {
      sedenome?: string;
      sedestatus?: number;
      idcliente?: bigint | number;
      sededtinclusao?: Date;
    }
  ) {
    try {
      const updatedSede = await this.prisma.sede.update({
        where: { idsede: id },
        data: {
          ...sedeData,
          idcliente: sedeData.idcliente
            ? Number(sedeData.idcliente)
            : undefined,
        },
      });
      return updatedSede;
    } catch (error) {
      console.error("Error updating sede:", error);
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
      console.error("Error deleting sede:", error);
      throw error;
    }
  }

  async findByClienteId(idcliente: bigint | number) {
    try {
      const sedes = await this.prisma.sede.findMany({
        where: { idcliente: Number(idcliente) },
        include: {
          endereco: true,
          equipamento: true,
        },
      });
      return sedes;
    } catch (error) {
      console.error("Error fetching sedes by cliente ID:", error);
      throw error;
    }
  }
}
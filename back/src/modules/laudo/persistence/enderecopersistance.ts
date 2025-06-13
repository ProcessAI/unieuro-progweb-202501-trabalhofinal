import { PrismaClient } from "@prisma/client";

export class EnderecoPersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(enderecoData: {
    enderecoendereco: string;
    enderecocep: string;
    enderecolat?: number;
    enderecolon?: number;
    enderecostatus?: number;
    idsede: number;
  }) {
    try {
      const endereco = await this.prisma.endereco.create({
        data: enderecoData,
      });
      return endereco;
    } catch (error) {
      console.error("Error creating endereco:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const enderecos = await this.prisma.endereco.findMany();
      return enderecos;
    } catch (error) {
      console.error("Error fetching enderecos:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      const endereco = await this.prisma.endereco.findUnique({
        where: { idendereco: id },
      });
      return endereco;
    } catch (error) {
      console.error("Error fetching endereco by ID:", error);
      throw error;
    }
  }

  async update(
    id: number,
    enderecoData: {
      enderecoendereco?: string;
      enderecocep?: string;
      enderecolat?: number;
      enderecolon?: number;
      enderecostatus?: number;
      idsede?: number;
    }
  ) {
    try {
      const updatedEndereco = await this.prisma.endereco.update({
        where: { idendereco: id },
        data: enderecoData,
      });
      return updatedEndereco;
    } catch (error) {
      console.error("Error updating endereco:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const deletedEndereco = await this.prisma.endereco.delete({
        where: { idendereco: id },
      });
      return deletedEndereco;
    } catch (error) {
      console.error("Error deleting endereco:", error);
      throw error;
    }
  }

  async findBySedeId(idsede: number) {
    try {
      const enderecos = await this.prisma.endereco.findMany({
        where: { idsede: idsede },
      });
      return enderecos;
    } catch (error) {
      console.error("Error fetching enderecos by sede ID:", error);
      throw error;
    }
  }
}
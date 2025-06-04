import { PrismaClient } from "@prisma/client";

export class clientePersistence {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(clienteData: { clientenome: string; clientestatus?: number }) {
    try {
      const cliente = await this.prisma.cliente.create({
        data: clienteData,
      });
      return cliente;
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      throw error;
    }
  }
  async findAll() {
    try {
      const clientes = await this.prisma.cliente.findMany();
      return clientes;
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      throw error;
    }
  }
  async findById(id: number) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { idcliente: id },
      });
      return cliente;
    } catch (error) {
      console.error("Erro ao buscar cliente por ID:", error);
      throw error;
    }
  }
  async update(id: number, clienteData: { clientenome?: string; clientestatus?: number }) {
    try {
      const updatedCliente = await this.prisma.cliente.update({
        where: { idcliente: id },
        data: clienteData,
      });
      return updatedCliente;
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      throw error;
    }
  }
  async delete(id: number) {
    try {
      const deletedCliente = await this.prisma.cliente.delete({
        where: { idcliente: id },
      });
      return deletedCliente;
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      throw error;
    }
  }
};
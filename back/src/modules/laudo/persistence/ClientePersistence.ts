import { PrismaClient } from '@prisma/client';

export class clientePersistence {
  
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  
  async create(clienteData: { clientenome: string, clientestatus?: number }) {
    try {
      const cliente = await this.prisma.cliente.create({
        data: clienteData});

        console.log('Recebido na persistência:', clienteData);

      return cliente;
      
    } catch (error) {
      console.error("Error creating cliente:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      const clientes = await this.prisma.cliente.findMany();
      return clientes;
    } catch (error) {
      console.error("Error fetching clientes:", error);
      throw error;
    }
  }
  async findById(id:number) {
    try {
      const cliente = await this.prisma.cliente.findUnique({
        where: { idcliente: id },
      });
      return cliente;
    } catch (error) {
      console.error("Error fetching cliente by ID:", error);
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
      console.error("Error updating cliente:", error);
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
      console.error("Error deleting cliente:", error);
      throw error;
    }
  }
};



/*

  Anotação: O ?? -> É um operador ?? TypeScript (e JavaScript moderno) é o
  "nullish coalescing operator", que retorna o valor à esquerda caso ele não seja
  null nem undefined. Caso contrário, retorna o valor à direita.

  Exmeplo:

    Se clienteData.clientestatus for 1, 2, 0, etc. → usa o valor original.

    Se clienteData.clientestatus for null ou undefined → usa 0.

*/
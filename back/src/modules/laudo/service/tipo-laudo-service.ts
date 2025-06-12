import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TipoLaudoService {
  async criar(data: { tipolaudonome: string; tipolaudotemplate?: string }) {
    return prisma.tipolaudo.create({ data });
  }

  async listar() {
    return prisma.tipolaudo.findMany();
  }

  async buscarPorId(id: number) {
    return prisma.tipolaudo.findUnique({ where: { idtipolaudo: id } });
  }

  async atualizar(
    id: number,
    data: Partial<{ tipolaudonome: string; tipolaudotemplate?: string }>
  ) {
    return prisma.tipolaudo.update({
      where: { idtipolaudo: id },
      data,
    });
  }

  async deletar(id: number) {
    await prisma.tipolaudo.delete({ where: { idtipolaudo: id } });
  }
}

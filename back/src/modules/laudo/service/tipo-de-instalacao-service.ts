import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TipoInstalacaoService {
  async criar(data: { tipoinstalacaonome: string }) {
    return prisma.tipoinstalacao.create({ data });
  }

  async listar() {
    return prisma.tipoinstalacao.findMany();
  }

  async buscarPorId(id: number) {
    return prisma.tipoinstalacao.findUnique({ where: { idtipoinstalacao: id } });
  }

  async atualizar(id: number, data: Partial<{ tipoinstalacaonome: string }>) {
    return prisma.tipoinstalacao.update({
      where: { idtipoinstalacao: id },
      data,
    });
  }

  async deletar(id: number) {
    await prisma.tipoinstalacao.delete({ where: { idtipoinstalacao: id } });
  }
}

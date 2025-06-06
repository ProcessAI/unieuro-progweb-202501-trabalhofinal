// back/src/modules/laudo/persistence/tipo-laudo-persistence.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Opcional, para verificar a conexão inicial do Prisma ao iniciar a aplicação.
// Isso ajuda a pegar erros de conexão com o DB mais cedo.
prisma.$connect().catch((e: Error) => { // Corrigido: 'e' com tipo Error
  console.error('Erro FATAL ao conectar ao banco de dados com Prisma:', e);
  console.error('Verifique sua DATABASE_URL no arquivo .env.');
  process.exit(1); // Encerra o processo se a conexão inicial falhar
});

export const TipoLaudoPersistence = {
  findAll: async () => {
    return await prisma.tipolaudo.findMany();
  },

  findById: async (id: number) => {
    return await prisma.tipolaudo.findUnique({
      where: { idtipolaudo: id },
    });
  },

  create: async (data: { tipolaudonome: string; tipolaudotemplate?: string }) => {
    return await prisma.tipolaudo.create({
      data,
    });
  },

  update: async (id: number, data: { tipolaudonome?: string; tipolaudotemplate?: string }) => {
    return await prisma.tipolaudo.update({
      where: { idtipolaudo: id },
      data,
    });
  },

  delete: async (id: number) => {
    await prisma.tipolaudo.delete({
      where: { idtipolaudo: id },
    });
  },
};

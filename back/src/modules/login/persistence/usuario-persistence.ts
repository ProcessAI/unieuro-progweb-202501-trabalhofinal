import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(usuarioemail: string, usuariosenha: string) {
  return prisma.usuario.create({
    data: {
      usuarioemail,
      usuariosenha,
    },
  });
}

export async function findUserByEmail(usuarioemail: String) {
  return prisma.usuario.findFirst({
    where: { usuarioemail },
  });
}
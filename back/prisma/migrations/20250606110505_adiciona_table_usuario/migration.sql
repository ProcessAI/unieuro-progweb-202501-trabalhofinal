-- CreateTable
CREATE TABLE "usuario" (
    "idusuario" SERIAL NOT NULL,
    "usuarioemail" VARCHAR(100) NOT NULL,
    "usuariosenha" VARCHAR(100) NOT NULL,
    "usuariostatus" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "usuario_pk" PRIMARY KEY ("idusuario")
);

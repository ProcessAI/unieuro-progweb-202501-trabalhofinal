-- CreateTable
CREATE TABLE "cliente" (
    "idcliente" BIGSERIAL NOT NULL,
    "clientenome" VARCHAR(50) NOT NULL,
    "clientestatus" INTEGER DEFAULT 0,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("idcliente")
);

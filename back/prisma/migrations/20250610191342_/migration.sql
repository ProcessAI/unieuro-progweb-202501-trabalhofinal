-- CreateTable
CREATE TABLE "endereco" (
    "idendereco" SERIAL NOT NULL,
    "enderecoendereco" VARCHAR(150) NOT NULL,
    "enderecocep" CHAR(8) NOT NULL,
    "enderecolat" DECIMAL,
    "enderecolon" DECIMAL,
    "enderecostatus" INTEGER DEFAULT 0,
    "idsede" INTEGER NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("idendereco")
);

-- CreateTable
CREATE TABLE "equipamento" (
    "idequipamento" SERIAL NOT NULL,
    "equipamentoserie" VARCHAR(30),
    "equipamentomodelo" VARCHAR(50),
    "equipamentomac" CHAR(12),
    "equipamentoipv4" VARCHAR(15),
    "equipamentoipv6" VARCHAR(45),
    "equipamentoanydesk" VARCHAR(10),
    "equipamentodw" VARCHAR(10),
    "equipamentoalugado" BOOLEAN DEFAULT true,
    "idsede" INTEGER NOT NULL,
    "idtipoeq" INTEGER NOT NULL,

    CONSTRAINT "equipamento_pkey" PRIMARY KEY ("idequipamento")
);

-- CreateTable
CREATE TABLE "laudo" (
    "idlaudo" SERIAL NOT NULL,
    "laudodescricao" TEXT NOT NULL,
    "laudohtmlmd" TEXT NOT NULL,
    "laudodatainclusao" TIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "laudofechamento" TIME(6),
    "laudostatus" INTEGER NOT NULL DEFAULT 0,
    "idtipolaudo" INTEGER NOT NULL,
    "idtipoinstalacao" INTEGER NOT NULL,
    "laudoosclickup" VARCHAR(10),

    CONSTRAINT "laudo_pkey" PRIMARY KEY ("idlaudo")
);

-- CreateTable
CREATE TABLE "sede" (
    "idsede" SERIAL NOT NULL,
    "sedenome" VARCHAR(50) NOT NULL,
    "sedestatus" INTEGER NOT NULL DEFAULT 0,
    "idcliente" INTEGER NOT NULL,
    "sededtinclusao" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sede_pkey" PRIMARY KEY ("idsede")
);

-- CreateTable
CREATE TABLE "tipoeq" (
    "idtipoeq" SERIAL NOT NULL,
    "tipoeqnome" VARCHAR(50) NOT NULL,

    CONSTRAINT "tipoeq_pkey" PRIMARY KEY ("idtipoeq")
);

-- CreateTable
CREATE TABLE "tipoinstalacao" (
    "idtipoinstalacao" SERIAL NOT NULL,
    "tipoinstalacaonome" VARCHAR(50) NOT NULL,

    CONSTRAINT "tipoinstalacao_pkey" PRIMARY KEY ("idtipoinstalacao")
);

-- CreateTable
CREATE TABLE "tipolaudo" (
    "idtipolaudo" SERIAL NOT NULL,
    "tipolaudonome" VARCHAR(50) NOT NULL,
    "tipolaudotemplate" TEXT,

    CONSTRAINT "tipolaudo_pkey" PRIMARY KEY ("idtipolaudo")
);

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_idsede_fkey" FOREIGN KEY ("idsede") REFERENCES "sede"("idsede") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipamento" ADD CONSTRAINT "equipamento_idsede_fkey" FOREIGN KEY ("idsede") REFERENCES "sede"("idsede") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipamento" ADD CONSTRAINT "equipamento_idtipoeq_fkey" FOREIGN KEY ("idtipoeq") REFERENCES "tipoeq"("idtipoeq") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laudo" ADD CONSTRAINT "laudo_idtipoinstalacao_fkey" FOREIGN KEY ("idtipoinstalacao") REFERENCES "tipoinstalacao"("idtipoinstalacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "laudo" ADD CONSTRAINT "laudo_idtipolaudo_fkey" FOREIGN KEY ("idtipolaudo") REFERENCES "tipolaudo"("idtipolaudo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sede" ADD CONSTRAINT "sede_idcliente_fkey" FOREIGN KEY ("idcliente") REFERENCES "cliente"("idcliente") ON DELETE NO ACTION ON UPDATE NO ACTION;

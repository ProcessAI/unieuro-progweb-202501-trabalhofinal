

Você pode criar tabelas manualmente e usar prisma db pull, mas precisa entender as limitações e implicações desse fluxo para não quebrar o sistema de migrações do Prisma.

Entendendo os dois fluxos

  Fluxo A – Modo Prisma-first (recomendado)
    
    Você modela no schema.prisma

    Executa prisma migrate dev → cria as tabelas no banco e registra a migração

    O Prisma gera os arquivos SQL e mantém o histórico de versões

  Fluxo B – Modo Database-first (o que você quer fazer)
  
    Você cria as tabelas manualmente no banco (via SQL)

    Roda prisma db pull → o Prisma lê o estado atual do banco e 
    gera um schema.prisma baseado nele

    Acha que pode rodar prisma migrate em cima disso — mas aqui
    mora o problema

  ❌ Por que você não deve rodar migrate após pull?
  
  Quando você usa prisma migrate dev ou prisma migrate deploy, o Prisma espera que ele mesmo tenha criado o banco com suas migrações controladas. Ele grava o estado de migração na tabela _prisma_migrations do seu banco.

  Se você:

    Criou o banco manualmente

    Rodou prisma db pull (sem usar migrate)

    E depois tentou rodar migrate dev

    O Prisma vai detectar que o estado atual do banco não bate com nenhuma migração. Resultado:

      ❌ Erro P3018 ou erro de inconsistência de estado
      ❌ Ou ele se recusa a rodar, dizendo que precisa resolver conflitos

    ✔️ Quando usar prisma db pull então?

    db pull é ótimo quando:

      Você está trabalhando com um banco já existente que não foi criado pelo Prisma

      Quer usar o Prisma apenas como client ORM, sem fazer migrações com ele

      Quer importar um banco legado para depois converter aos poucos para o fluxo Prisma-first

      Mas se você quiser usar migrate depois do pull, você deve "resetar" 
      o controle de migração antes — ou iniciar do zero com --from-empty 
      e gerar a primeira migração com diff, como você tentou fazer.


  Se quiser misturar os dois mundos (pull → migrate):
    
    Crie o banco manualmente

    Rode prisma db pull

    Use:

      npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > init.sql

      Crie a estrutura de migração manualmente (como prisma/migrations/init/migration.sql)

      Rode prisma migrate resolve --applied init

      Isso informa ao Prisma que aquela migração já foi aplicada.

✅ Conclusão

Você pode sim usar o banco manual e depois conectar com Prisma, mas precisa entender que migrate não funciona em cima de algo que ele não criou ou não entende. A recomendação oficial da Prisma é:

🔹 Use prisma db pull quando for ORM em banco existente

🔹 Use prisma migrate quando quiser controle de versão e migrações automáticas



Como Criar as tabelas manualmente → usar prisma db pull → gerar uma migration.sql
via diff → resolver migração com prisma migrate resolve → continuar com migrate dev normalmente.

✅ Passo a Passo Completo

🔹 1. Crie o banco e as tabelas manualmente (SQL)

  Exemplo em PostgreSQL:

  CREATE DATABASE biblioteca2;

  -- Conecte-se a `biblioteca2`, depois:

  CREATE TABLE autor (
    idautor SERIAL PRIMARY KEY,
    nome VARCHAR(50)
  );

  CREATE TABLE livro (
    idlivro SERIAL PRIMARY KEY,
    idautor INT NOT NULL,
    titulo VARCHAR(50),
    FOREIGN KEY (idautor) REFERENCES autor(idautor)
  );

🔹 2. Configure seu schema.prisma

Garanta que o datasource está correto, exemplo:

  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }

  generator client {
    provider = "prisma-client-js"
  }

🔹 3. Rode prisma db pull

Esse comando vai ler o banco de dados e gerar um schema.prisma a partir dele:

  npx prisma db pull

🔹 4. Gere a migração inicial com diff

Agora você vai comparar o banco atual (manual) com um banco vazio e salvar isso como 
migration.sql:

  npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/init/migration.sql

  ⚠️ Se prisma/migrations/init não existir, crie manualmente:


  mkdir prisma/migrations/init -Force

🔹 5. Marque essa migração como "já aplicada"
Assim o Prisma vai considerar que a migração init já foi aplicada no banco:


  npx prisma migrate resolve --applied init

🔹 6. Gere o client

  npx prisma generate

🔹 7. Agora você pode usar prisma migrate dev normalmente
Qualquer mudança futura no schema, você faz via migrate dev:

  npx prisma migrate dev --name add-campos-ou-tabelas

🧠 O que você ganhou com isso?

Você manteve controle manual sobre a estrutura inicial

Evitou conflito entre o banco e o Prisma

A partir de agora, o Prisma está sincronizado com o banco

Pode usar todos os comandos migrate, generate, etc. sem erro
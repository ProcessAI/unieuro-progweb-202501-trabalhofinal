Dentro do nosso arquivo de configuração do prisma, também conhecido como
 - schema.prisma

Temos uma estrutura inicial, padrão, veja!

    generator client {
    provider = "prisma-client-js"
    // output é opcional, o padrão é node_modules/@prisma/client
    // output = "./generated/client"
    }

    datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    }

    model User {
    id        Int      @id @default(autoincrement())
    name      String
    email     String   @unique
    createdAt DateTime @default(now())

    @@map("user") // opcional: nome da tabela real no banco
    }

    generetor{...} -> Define como e onde o Prisma Client 
    (biblioteca de acesso ao banco via código) será gerado.

        provider = "prisma-client-js" -> Diz que será usado o cliente 
        JavaScript/TypeScript do Prisma.

        output = "../generated/prisma" -> Define onde o código gerado será salvo. 
        Nesse caso, na pasta generated/prisma, um nível acima do diretório atual
        do schema.prisma.

    datasource db {...} -> Define os dados de conexão com o banco de dados.

        provider = "postgresql" -> Informa que o banco usado é PostgreSQL.

        url = env("DATABASE_URL") -> A URL de conexão será carregada da variável de
        ambiente DATABASE_URL, definida no seu arquivo .env. Exemplo típico:

            DATABASE_URL="postgresql://usuario:senha@localhost:5432/banco?schema=nome_do_schema"

    model Cliente { ... } -> Define uma tabela do banco como um model do Prisma.
    Ele será convertido em uma entidade no Prisma Client para uso em código.

        id int @id @default(autoincrement()) -> Chave primária do tipo inteiro,
        com autoincremento.

        nome String -> Coluna nome, tipo texto.
        
        status int -> Coluna status, tipo inteiro.

        @@map("cliente") -> Mapeia esse model para a tabela cliente no banco 
        (caso o nome do model seja diferente do nome real da tabela).

        @map("cliente") -> serve para mapear um nome diferente da tabela ou coluna no
        banco de dados em relação ao nome usado no modelo Prisma.

        Para que serve o @map() no geral?

        Para que serve?
        
            Sem @map: Prisma assume que o nome do modelo/campo será igual ao da 
            tabela/coluna no banco.

            Com @map: Você pode manter nomes mais expressivos ou idiomáticos no código,
            mesmo que o banco use nomes antigos, abreviados ou padrões legados.
            Isso é muito útil em sistemas legados, onde o banco já tem nomes estabelecidos.

        
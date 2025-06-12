FremeWork

    - Prisma: É Um ORM é uma ferramenta que conecta seu código (em forma de objetos)
    a um banco de dados relacional
    
    - Comandos para instalação:
        
        npm install prisma --save-dev

        Serve: Criar o modo Desenvolvedor que contém ferramenta de linha de comando (CLI)
        usada para:

            Criar o arquivo de schema (npx prisma init)

            Criar e aplicar migrações no banco (npx prisma migrate dev)

            Gerar o cliente Prisma (npx prisma generate)

            Visualizar o banco com Prisma Studio (npx prisma studio)

    
    - Depedências:

        npm install @prisma/client

        Serve: É a dependência de runtime (tempo de execução) do Prisma. 
        Ela contém o cliente gerado automaticamente para acessar seu banco de dados
        com TypeScript/JavaScript de forma tipada.

    comandos básicos:    
        
        npx prisma init -> Cria a pasta prisma/ com o arquivo schema.prisma e o .env.

        npx prisma generate -> Gera o código do cliente com base no schema.prisma.

        npx prisma migrate dev --name nome_da_migracao -> npx prisma migrate dev --name nome_da_migracao

        npx prisma studio -> npx prisma studio

        npx prisma migrate deploy -> Usado em produção para aplicar migrações existentes.

        npx prisma migrate reset -> Apaga, recria o banco e reaplica todas as migrações 
        (bom para testes).

        npx prisma validate ->  Verificar se o schema está válido


FremeWork

    - Exepress: O Express é um framework web minimalista e flexível para Node.js,
    usado para criar APIs e aplicações web no backend.

       Funcionalidade -> O Express simplifica tarefas comuns como:

        Criar rotas HTTP (GET, POST, etc.)

        Processar requisições e respostas

        Lidar com parametrização de URLs

        Gerenciar middlewares

        Trabalhar com JSON, formulários, cookies, etc.

    - Depedências:

        npm install --save-dev @types/express

        Serve: A dependência @types/express serve para adicionar tipagens TypeScript
        ao framework Express, que é originalmente escrito em JavaScript puro.

        Por que usar @types/express?

            O pacote express não é escrito em TypeScript, então, para usar com segurança
            tipada no seu projeto TypeScript, você precisa das definições de tipo
            fornecidas pela comunidade no DefinitelyTyped.

FremeWork

    - cors: 

        npm i cors

    
Depedências/ferramentas para Copilar o TypeScript:

 - ts-node-dev

    instalação:
        
        npm install ts-node-dev

    O ts-node-dev é uma ferramenta de desenvolvimento para projetos em TypeScript,
    que combina:

        ts-node: executa código TypeScript diretamente (sem precisar compilar manualmente).

        nodemon: reinicia o servidor automaticamente sempre que você salva um arquivo.

    Bom para: Trabalhar em ambientes de desenvolvimento, porém não é o ideal para 
    ambientes de produção, visto que o copilador pode errar algo na copilação
    dp TypeScript e converter para JavaScript, assim existe chances de quebra a 
    aplicação.

    - Principais comandos

        npx ts-node-dev caminho/arquivo.ts -> -> executar um arquivo.ts

        exemplo: npx ts-node-dev srx/index.ts

    - tsx 

        instalação:

            npm install tsx -D ou npm install tsx --save-dev

        O tsx é uma ferramenta moderna para executar arquivos TypeScript e JavaScript
        diretamente, sem precisar compilar antes. Ele funciona como um interpretador
        rápido que entende arquivos .ts e .tsx na hora, simplificando muito o 
        desenvolvimento.

        Por que usar o tsx?
            
            Você escreve seus arquivos TypeScript normalmente (.ts ou .tsx).

            Em vez de rodar um processo de compilação (converter para .js), o tsx roda
            seu código direto.

            Ele também suporta recarregamento automático (hot reload) para facilitar seu
            fluxo de trabalho.

            Suporta importação de módulos ES, o que é ótimo para projetos modernos.

        Principais comandos:

            npx tsx caminho/arquivo.ts -> Executar um arquivo.ts

            exemplo: npx tsx srx/index.ts

            npx tsx watch caminho/arquivo.ts -> Modo desenvolvimento com carregamento
            automático 


    - TANTO TSX E TS-NODE-DEV POSSUI SCRIPT DE CONFIGURAÇÃO NO PACKAGE.JSON

        "scripts": {
            "dev1": "ts-node-dev src/index.ts",
                dev2": "tsx watch src/index.ts"
        }

        agora basta dar um:

            npm run dev1 ou npm run dev2
            
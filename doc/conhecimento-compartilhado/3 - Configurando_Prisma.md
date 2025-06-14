Aprendendo a configurar o Prisma

1 - O que é uma ORM? 
   
    Object-Relational Mapping (ou Mapeamento Objeto-Relacional, em português)

    Um ORM é uma ferramenta que conecta seu código (em forma de objetos) 
    a um banco de dados relacional (como PostgreSQL, MySQL, SQLite etc.).

    Em vez de escrever SQL puro para fazer INSERT, SELECT, UPDATE e DELETE. 
        Você usa objetos e métodos da linguagem de programação (Python, JavaScript, etc.).


2 - Configurando prisma:

    caminho_pasta: C:\unieuro-progweb-202501-trabalhofinal\back\database

    - no seu cmd, no caminho acima você irá utilizar os seguintes comandos: 

        npm install prisma --save-dev -> instalar o prisma
        npm install @prisma/client -> instalar dependência

        npx prisma init -> inicializar o prisma

    - quando o prisma é inicializado ele cria a seguinte pasta:

        /database
        |---/prisma
        |    |--- shema.prisma
        |--- arquivo.env

        Dentro da pasta vamos ter o arquivo de configuração principal do prisma
        esse arquivo define a estrutura do banco de dados, incluindo:
            
            - modelos
            - fontes de dados
            - geradores
        
        Geralmente contém:

            Data souce: Define como o prisma se conecta ao banco de dados
            Geradores: Especificam como o prisma deve gerar códigos para interagir com o Banco
            Modelos: Representam tabelas dos bancos de dados e seus campos

        O arquivo.env também é gerado, porém vamos passar ele para a  nossa pasta raiz

        /back
        |---/database
        |- arquivo.env
        |- package-lock.json
        |- package.json

        É uma boa prática deixar o arquivo.env na pasta raiz, dentro dessa pasta raiz
        iremos colocar a URLs do nosso banco de dados segue o exemplo:

            DATABASE_URL = "postgresql://postgresql:senha@localhost:5432/meubanco"

        O que representa cada parte dessa URL? Veja a baixo:

        postgresql://         -> protocolo do banco
        postgres:             -> nome do usuário
        ********@             -> senha do usuário
        localhost:5432/       -> host e porta
        banco_banco           -> nome do banco de dados
        ?schema=public        -> schema usado no Prisma

        Atenção ao schema:
            o schema = public, ao menos no postgresql, significa que ele está acessando
            um schema muito específico, ou que você específicou. Porque geralmente o 
            shema = public é o mais utilizado        
        
        Após definir a URLs no arquivo.env, na pasta raiz/diretório do projeto:

        caminho_raiz: C:\unieuro-progweb-202501-trabalhofinal\back

        você via cmd no caminho_raiz, vai usar o comando:

            npx prisma migrate dev --schema=database/prisma/schema.prisma

        Basicamente esse comando vai sincronizar o schema.prisma com o banco de dados
    
    COMANDOS DETALHES:

        1 - npx prisma generate --schema=database/prisma/schema.prisma

        Gera o Prisma Client com base no seu schema.prisma. Esse client é uma biblioteca
        TypeScript/JavaScript que você importa para interagir com o banco via código.

        Use esse comando quando:

            Você alterar o schema.prisma

            Você mudar a DATABASE_URL

            Você quiser regenerar o client manualmente


        2 - npx prisma migrate dev --schema=database/prisma/schema.prisma

        Cria e aplica uma nova migração com base nas mudanças feitas no schema.prisma, 
        sincronizando o banco com seu código.

        Use quando:

            Você adiciona, remove ou altera models/tabelas no schema.prisma

            Você quer aplicar essas alterações no banco de dados

       3 - npx prisma studio --schema=database/prisma/schema.prisma

       Abre o Prisma Studio, uma interface gráfica no navegador para visualizar e editar os dados do banco.

        Use quando:

        Você quiser visualizar, inserir ou editar registros no banco manualmente

        Está testando ou debugando a aplicação


    DICA DE CONFIGURAÇÃO DOS COMANDOS:

    É interessante colocar esses comandos no scrips do seu package.json

    "scripts": {
        "prisma:generate": "npx prisma generate --schema=database/prisma/schema.prisma",
        "prisma:migrate": "npx prisma migrate dev --schema=database/prisma/schema.prisma",
        "prisma:studio": "npx prisma studio --schema=database/prisma/schema.prisma"
        "prisma:migrate-reset":"npx prisma migrate reset --schema=database/prisma/schema.prisma"
    },

    Assim você tem uma eficiência maior, basta usar npm run <nome_scripts_no_packege.json>

    exemplo: nmp run prisma:migrate

3 - Reconfigurando o Prisma caso de merda:

    Atenção: Use esse método, somente se não possuir dados relevantes (valorosos)

    3.1 - Remova a pasta migrations no seu powershell: 

        Remove-Item -Recurse -Force .\database\prisma\migrations

        Você pode fazer manualmente, basta abrir o vscode ou explorador de arquivo
        e deletar a pasta migrations

    3.2 - Após, no powershell, no diretório raiz do seu projeto, coloque o comando:        
    
        npx prisma migrate reset --schema=database/prisma/schema.prisma

        - Atenção: esse comando apaga o banco atual! É ideal para ambientes de
        desenvolvimento, não de produção, pois remove todos os dados existentes
        no schema usado.
        
    3.3 - Depois, é boa prática fazer excluir o banco de dados no seu SGBD e criar um novo
    banco do zero

    3.4 - Cheque a URLs com seu banco de dados para fazer a integração do prisma no arquivo.env

    3.5 - Agora, redefina o arquivo schema.prisma na pasta prisma e sincronize o prisma
    com o seu banco de dados usando o prisma migrate:

        npx prisma migrate dev --name init --schema=database/prisma/schema.prisma

    3.6 - Por ultimo! Crie um prisma Client usando o comando:

        npx prisma generate --schema=database/prisma/schema.prisma
        


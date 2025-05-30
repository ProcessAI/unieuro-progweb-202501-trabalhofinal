/back                      # Pasta raiz do projeto back-end
│
├── /src                  # Código-fonte principal da aplicação
│   │
│   ├── /modules          # Módulos da aplicação (feature-based architecture)
│   │   │
│   │   ├── /router       # Inicialização da aplicação Express
│   │   │   └── App.ts    # Arquivo principal que configura e exporta a instância do Express
│   │   │
│   │   └── /laudo        # Módulo 'laudo' (exemplo de domínio de negócio)
│   │       │
│   │       ├── /routes       # Rotas HTTP específicas do módulo
│   │       │   └── Route_cliente.ts # Define endpoints relacionados a clientes
│   │       │
│   │       ├── /service      # Camada de lógica de negócio (Services)
│   │       │   └── Cliente.ts # Implementação da lógica para manipulação de dados dos clientes
│   │       │
│   │       └── /persistency  # Camada de persistência (equivalente ao DAO ou Repositório)
│   │           └── ClienteRepository.ts # Acesso ao banco de dados, consultas e manipulações
│   │
│   └── /prisma            # Configurações e arquivos gerenciados pelo Prisma
│       │
│       ├── schema.prisma  # Arquivo principal de definição do modelo de dados
│       │                 # Exemplo:
│       │                 #
│       │                 # model Cliente {
│       │                 #   id      Int     @id @default(autoincrement())
│       │                 #   nome    String
│       │                 #   email   String  @unique
│       │                 # }
│       │
│       ├── /migrate       # Histórico de migrações geradas pelo Prisma
│       │   └── [timestamp]_create_cliente_table/
│       │       └── steps.sql  # SQL gerado pela migração
│       │
│       └── /generate      # Código gerado automaticamente pelo Prisma
│           └── client/    # Cliente Prisma que é usado para interagir com o DB
│
└── package.json           # Scripts e dependências do projeto

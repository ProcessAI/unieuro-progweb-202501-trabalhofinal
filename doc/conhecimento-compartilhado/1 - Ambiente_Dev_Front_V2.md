VERSÃO ATUAL DO AMBIENTE FRONT-END

Instalação Detalhada – Projeto Laudinho Frontend com Vite + React + TypeScript

  Objetivo: Criar e configurar um projeto frontend moderno com Vite, React, TypeScript, Tailwind CSS
  e uma stack moderna de componentes e utilitários.

Etapa 1: Criação do Projeto
  
  1.1. Criação via template personalizado (manus-create-react-app)

    manus-create-react-app laudinho-frontend
    
    Explicação: Esse comando usa um boilerplate customizado com padrões já pré-configurados
    (ex: Tailwind, ESLint, estrutura de pastas).
    É a forma recomendada caso você já use esse setup internamente.

  1.2. Alternativa: Criação manual com Vite e TypeScript
    
    cd front

      npm create vite@latest laudinho-frontend -- --template react-ts
    
    Explicação: 
    
      Usamos o template react-ts que já configura Vite com React + TypeScript. 
      O -- separa os argumentos do script CLI.

Etapa 2: Instalação de Tipagens TypeScript

  Se o template não já tiver TypeScript, execute:


  # Usando pnpm
    
    pnpm add -D typescript @types/react @types/react-dom @types/node

  # Alternativa com npm

    npm install -D typescript @types/react @types/react-dom @types/node
    
    Explicação: 
    
      Adicionamos tipagens explícitas de React, ReactDOM e Node.js 
      para melhorar o IntelliSense e evitar erros de compilação.

Etapa 3: Instalação de Dependências (Pré-incluídas no Template)

  3.1. Componentes UI (Radix + shadcn/ui)

    pnpm add \
      @radix-ui/react-dialog \
      @radix-ui/react-label \
      @radix-ui/react-slot \
      class-variance-authority \
      clsx \
      tailwind-merge \
      lucide-react
  
  3.2. Estilização

    pnpm add tailwindcss @tailwindcss/vite
    pnpm add -D tw-animate-css

  3.3. Formulários e Validação

    pnpm add react-hook-form @hookform/resolvers zod
  
  3.4. Roteamento

    pnpm add react-router-dom

  3.5. Utilitários Gerais

    pnpm add date-fns next-themes sonner

  Dica: 
  
    Use pnpm why <pacote> para verificar dependências 
    já instaladas antes de adicionar novamente.

Etapa 4: Configuração do Projeto

  4.1. tsconfig.json
    
    Salve com este conteúdo:

      {
        "compilerOptions": {
          "target": "ES2020",
          "useDefineForClassFields": true,
          "lib": ["ES2020", "DOM", "DOM.Iterable"],
          "module": "ESNext",
          "skipLibCheck": true,
          "moduleResolution": "bundler",
          "allowImportingTsExtensions": true,
          "resolveJsonModule": true,
          "isolatedModules": true,
          "noEmit": true,
          "jsx": "react-jsx",
          "strict": true,
          "noUnusedLocals": true,
          "noUnusedParameters": true,
          "noFallthroughCasesInSwitch": true,
          "baseUrl": ".",
          "paths": {
            "@/*": ["./src/*"]
          }
        },
        "include": ["src"],
        "references": [{ "path": "./tsconfig.node.json" }]
      }

4.2. vite.config.ts

  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'
  import path from 'path'

  export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  })

  Explicação: 
    
    O alias @/ melhora a legibilidade dos imports e evita caminhos relativos complexos.

Etapa 5: Estrutura Inicial de Pastas

  mkdir -p src/{pages,service,components/ui,hooks,lib,assets}
  
  Sugestão: Padronize nomenclatura e estrutura em todos os projetos do time para facilitar onboarding.


Etapa 6: Scripts no package.json

  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }


Etapa 7: Executando o Projeto

  Instalar dependências:

    pnpm install
  
  Rodar em modo desenvolvimento:

    pnpm run dev
    
  Gerar build para produção:

    pnpm run build

  Visualizar build:
    
    pnpm run preview

  Rodar linter:

    pnpm run lint


Etapa 8: Instalação Manual de Pacotes Avançados

  Componentes adicionais da Radix:

  pnpm add \
    @radix-ui/react-accordion \
    @radix-ui/react-alert-dialog \
    @radix-ui/react-avatar \
    @radix-ui/react-checkbox \
    @radix-ui/react-dropdown-menu \
    @radix-ui/react-popover \
    @radix-ui/react-select \
    @radix-ui/react-separator \
    @radix-ui/react-switch \
    @radix-ui/react-tabs \
    @radix-ui/react-tooltip

  Utilitários diversos:

    pnpm add \
      cmdk \
      input-otp \
      vaul \
      embla-carousel-react \
      react-resizable-panels \
      recharts \
      framer-motion


Etapa 9: Verificação Final

  Verificar se o TypeScript está ok:
    
    npx tsc --noEmit

  Compilar o projeto:

    pnpm run build

  Rodar o servidor:

    pnpm run dev
 
10 -  Notas Técnicas

  +---------------------+-----------------------------+
  | Requisito           | Valor                       |
  +---------------------+-----------------------------+
  | Gerenciador         | pnpm (preferencial)         |
  | Node.js             | Versão 20.x ou superior     |
  | Alias de path       | @/ → ./src/                 |
  | TypeScript          | Configuração estrita        |
  | Hot Reload          | Vite (automático)           |
  +---------------------+-----------------------------+


11 - Instalação Rápida (1-liner para terminal)

  manus-create-react-app laudinho-frontend && \
  cd laudinho-frontend && \
  pnpm add -D typescript @types/react @types/react-dom @types/node && \
  mkdir -p src/{pages,service,components/ui,hooks,lib,assets} && \
  pnpm install && \
  pnpm run dev

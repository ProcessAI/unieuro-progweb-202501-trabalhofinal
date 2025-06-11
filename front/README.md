# Laudinho Frontend

Sistema de gerenciamento de clientes desenvolvido em React com TypeScript, usando Vite como bundler.

## 🚀 Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca para construção de interfaces
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 6.3.5** - Build tool e dev server
- **Tailwind CSS 4.1.7** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Ícones
- **React Router DOM** - Roteamento
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas

## 📁 Estrutura do Projeto

```
laudinho-frontend/
├── public/
├── src/
│   ├── assets/          # Arquivos estáticos (imagens, etc.)
│   ├── components/
│   │   └── ui/          # Componentes UI do shadcn/ui
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Funções utilitárias
│   ├── pages/           # Páginas da aplicação
│   │   └── ClientesPage.tsx
│   ├── service/         # Serviços e APIs
│   ├── App.css          # Estilos da aplicação
│   ├── App.tsx          # Componente principal
│   ├── index.css        # Estilos globais
│   └── main.tsx         # Ponto de entrada
├── components.json      # Configuração do shadcn/ui
├── eslint.config.js     # Configuração do ESLint
├── index.html           # HTML principal
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração do TypeScript
├── tsconfig.node.json   # Configuração do TypeScript para Node
└── vite.config.ts       # Configuração do Vite
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 20.x ou superior
- pnpm (recomendado) ou npm

### Passos para instalação

1. **Clone ou baixe o projeto**
   ```bash
   # Se estiver clonando de um repositório
   git clone <url-do-repositorio>
   cd laudinho-frontend
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra o navegador em: `http://localhost:5173`

## 📋 Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza o build de produção
- `pnpm run lint` - Executa o linter

## 🎯 Funcionalidades

### Gerenciamento de Clientes
- ✅ Listar clientes
- ✅ Criar novo cliente
- ✅ Editar cliente existente
- ✅ Excluir cliente
- ✅ Ativar/Inativar cliente
- ✅ Buscar clientes

### Gerenciamento de Sedes
- ✅ Visualizar sedes de um cliente
- ✅ Criar nova sede
- ✅ Editar sede existente
- ✅ Excluir sede
- ✅ Buscar sedes

### Interface
- ✅ Design responsivo
- ✅ Modais para criação/edição
- ✅ Navegação intuitiva
- ✅ Feedback visual de status

## 🎨 Componentes UI

O projeto utiliza componentes do **shadcn/ui** baseados no **Radix UI**:

- `Dialog` - Modais e pop-ups
- `Input` - Campos de entrada
- `Button` - Botões interativos
- E outros componentes conforme necessário

## 🔧 Configurações Importantes

### TypeScript
- Configuração estrita habilitada
- Paths configurados para imports absolutos (`@/`)
- Suporte completo para JSX

### Vite
- Hot Module Replacement (HMR)
- Build otimizado para produção
- Suporte a TypeScript nativo

### Tailwind CSS
- Configuração personalizada
- Componentes estilizados
- Design system consistente

## 📦 Dependências Principais

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "typescript": "^5.8.3",
  "vite": "^6.3.5",
  "@radix-ui/react-dialog": "^1.1.13",
  "tailwindcss": "^4.1.7",
  "lucide-react": "^0.510.0"
}
```

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Gere o build de produção**
   ```bash
   pnpm run build
   ```

2. **Os arquivos estarão na pasta `dist/`**
   - Faça upload dos arquivos para seu servidor web
   - Configure o servidor para servir arquivos estáticos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos issues do repositório.


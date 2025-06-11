# Comandos de Instalação - Laudinho Frontend

## 🔧 Comandos para Instalação Completa

### 1. Criar projeto React com Vite e TypeScript
```bash
# Usando o template do Manus (recomendado)
manus-create-react-app laudinho-frontend

# OU usando create-vite diretamente
npm create vite@latest laudinho-frontend -- --template react-ts
cd laudinho-frontend
```

### 2. Instalar TypeScript e tipos necessários
```bash
pnpm add -D typescript @types/react @types/react-dom @types/node
# ou
npm install -D typescript @types/react @types/react-dom @types/node
```

### 3. Dependências já incluídas no template
As seguintes dependências já estão instaladas no template:

#### UI e Componentes
```bash
# Radix UI (componentes base)
@radix-ui/react-dialog
@radix-ui/react-label
@radix-ui/react-slot
# ... outros componentes Radix UI

# shadcn/ui utilities
class-variance-authority
clsx
tailwind-merge

# Ícones
lucide-react
```

#### Styling
```bash
# Tailwind CSS
tailwindcss
@tailwindcss/vite

# Animações
tw-animate-css
```

#### Formulários e Validação
```bash
# React Hook Form
react-hook-form
@hookform/resolvers

# Validação
zod
```

#### Roteamento
```bash
# React Router
react-router-dom
```

#### Utilitários
```bash
# Datas
date-fns

# Temas
next-themes

# Notificações
sonner
```

### 4. Configurações necessárias

#### tsconfig.json
```json
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
```

#### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### 5. Estrutura de pastas a criar
```bash
mkdir -p src/pages
mkdir -p src/service
mkdir -p src/components/ui
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/assets
```

### 6. Scripts do package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### 7. Comandos para desenvolvimento
```bash
# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Visualizar build de produção
pnpm run preview

# Executar linter
pnpm run lint
```

### 8. Dependências específicas do projeto (se necessário instalar manualmente)

#### Componentes UI adicionais
```bash
pnpm add @radix-ui/react-accordion
pnpm add @radix-ui/react-alert-dialog
pnpm add @radix-ui/react-avatar
pnpm add @radix-ui/react-checkbox
pnpm add @radix-ui/react-dropdown-menu
pnpm add @radix-ui/react-popover
pnpm add @radix-ui/react-select
pnpm add @radix-ui/react-separator
pnpm add @radix-ui/react-switch
pnpm add @radix-ui/react-tabs
pnpm add @radix-ui/react-tooltip
```

#### Utilitários adicionais
```bash
pnpm add cmdk              # Command palette
pnpm add input-otp         # OTP input
pnpm add vaul              # Drawer component
pnpm add embla-carousel-react  # Carousel
pnpm add react-resizable-panels  # Resizable panels
pnpm add recharts          # Charts
pnpm add framer-motion     # Animações
```

### 9. Verificação da instalação
```bash
# Verificar se TypeScript está funcionando
npx tsc --noEmit

# Verificar se o projeto compila
pnpm run build

# Executar o projeto
pnpm run dev
```

## 📝 Notas Importantes

1. **pnpm vs npm**: O projeto está configurado para usar pnpm, mas também funciona com npm
2. **Node.js**: Requer Node.js 20.x ou superior
3. **TypeScript**: Configuração estrita habilitada
4. **Paths**: Configurado para usar `@/` como alias para `src/`
5. **Hot Reload**: Funciona automaticamente em modo desenvolvimento

## 🚀 Comando Rápido (Tudo em um)
```bash
# Criar projeto e instalar tudo
manus-create-react-app laudinho-frontend && \
cd laudinho-frontend && \
pnpm add -D typescript @types/react @types/react-dom @types/node && \
mkdir -p src/pages src/service && \
pnpm run dev
```


# DevOps & Infraestrutura: Melhorias e Guia de Execução

Este documento consolida todas as melhorias recentes realizadas na arquitetura de execução (DevOps) do projeto Laudinho e serve como um guia completo para rodar a aplicação localmente de forma robusta e sem erros de conexão.

---

## 1. Melhorias Gerais de DevOps e Arquitetura

Foram feitas diversas correções e otimizações para garantir que o projeto pudesse rodar perfeitamente fora do ambiente de produção (localmente ou em novos servidores):

### A. Resolução de Conectividade do Frontend (Vite)
* **Injeção de Variáveis no Docker:** O `Dockerfile` do frontend e o `docker-compose.yml` foram atualizados para garantir que a variável `VITE_API_URL` seja passada corretamente através de `args` e `ENV` durante a etapa de build. Isso permite que o Vite utilize dinamicamente a URL do backend local.
* **Fallback de Configuração Seguro (`config.ts`):** O fallback rígido para o domínio de produção (`https://laudinho.cleversystems.net`) foi removido temporariamente no ambiente local. Como o certificado SSL daquele domínio estava expirado, as requisições falhavam com `Erro 60` no navegador. Agora o fallback está definido para `http://localhost:8080`, garantindo a comunicação incondicional com o backend local caso o `.env` não seja injetado.

### B. Correção de CORS (Cross-Origin Resource Sharing) no Backend
* **Lista de Origens Permitidas:** O Express.js (`app.ts`) bloqueava as requisições que partiam de navegadores acessando o endereço `http://localhost:3000` (porta exportada pelo Docker do frontend). A origem foi adicionada explicitamente nas políticas de CORS (`corsOptions`), resolvendo falhas nas requisições do tipo *preflight* (`OPTIONS`) ao tentar registrar e logar usuários.

### C. Segurança no Roteamento Cliente (React Router)
* **Auth Guard (Rotas Protegidas):** O roteamento via `App.tsx` não validava os acessos, o que permitia que usuários pulassem a tela de cadastro inserindo `/laudo` direto na barra da URL.
* **Gestão de Token JWT:** O retorno do backend com o Token de validação de Login não era tratado. O `login.tsx` foi atualizado para salvar o token adequadamente no `localStorage`, e o componente `ProtectedRoute` foi implementado no `App.tsx` para barrar acessos não autenticados nas páginas restritas.

### D. Sincronização do Banco de Dados
* Os scripts e o fluxo para executar as rotinas (migrations) do Prisma foram validados. Ao subir localmente, o banco iniciava vazio e as inserções não encontravam as tabelas, causando erros internos (`500`). Isso agora está coberto no passo a passo abaixo.

---

## 2. Como Rodar o Sistema Localmente

Siga o passo a passo abaixo para rodar o projeto completamente do zero utilizando o Docker Compose:

### Pré-requisitos
* Ter o **Docker** e o **Docker Compose** instalados na sua máquina.

### Passo 1: Subir os Contêineres
Na raiz do projeto (onde se encontra o arquivo `docker-compose.yml`), execute o comando abaixo no terminal. O modo `--build` garante que o frontend e o backend serão recompilados lendo as configurações mais recentes.

```bash
docker compose up -d --build
```

O comando irá iniciar 3 contêineres:
1. `laudinho-db`: Banco de Dados PostgreSQL (porta 5432).
2. `laudinho-back`: Backend em Node.js (porta 8080).
3. `laudinho-front`: Frontend NGINX / React (porta 3000).

### Passo 2: Executar as Migrações do Banco de Dados (Prisma)
Ao subir o banco de dados pela primeira vez, as tabelas não existirão. Você deve criar as tabelas executando o *migrate* do Prisma de dentro do contêiner do backend:

```bash
docker compose exec back npx prisma migrate deploy
```
*Nota: Este comando vai ler o esquema em `back/prisma/schema.prisma` e criar todas as tabelas (como `Usuario`, `Equipamento`, etc) no banco recém-iniciado.*

### Passo 3: Acessar a Aplicação
Com os contêineres rodando e o banco atualizado, você pode acessar:

* **Frontend (Aplicação Web):** [http://localhost:3000](http://localhost:3000)
* **Backend Health Check:** [http://localhost:8080/api/health](http://localhost:8080/api/health)

### Passo 4: Testando o Fluxo de Acesso
1. Entre na página inicial em [http://localhost:3000](http://localhost:3000).
2. Clique em **Cadastre-se** e crie uma conta. (Verifique o sucesso ou o alerta de usuário já existente).
3. Realize o **Login** com os dados informados. O token será salvo e você será redirecionado para as páginas internas.
4. Tente acessar `/laudo` em uma aba anônima; você será redirecionado automaticamente para o Login pela proteção de rota implantada.

---

### Comandos Úteis do Dia a Dia

**Visualizar Logs:**
Se algo der erro, acompanhe os logs de determinado serviço (exemplo, backend):
```bash
docker compose logs -f back
```

**Parar os contêineres (sem apagar os dados do banco):**
```bash
docker compose down
```

**Parar os contêineres e DESTRUIR o banco de dados (Resetar tudo):**
```bash
docker compose down -v
```

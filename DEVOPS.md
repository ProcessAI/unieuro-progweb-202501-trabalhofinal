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

## Segurança e Confiabilidade

Para garantir a segurança dos dados e a robustez da infraestrutura do Laudinho, implementamos três entregáveis essenciais de confiabilidade e segurança.

### 1. Backup Automático (PostgreSQL)
* **Como funciona:** O contêiner de `backup` roda em segundo plano e realiza um backup completo comprimido (`pg_dump` + `gzip`) a cada 24 horas. Os backups são salvos no volume persistente `laudinho_backups` com retenção configurável (padrão de 7 dias).
* **Backup Imediato Manual:**
  ```bash
  docker compose exec backup backup.sh
  ```
* **Restauração de Backup:**
  Para restaurar um backup, liste os arquivos em `/backups` e passe o arquivo desejado para o script de restauração:
  ```bash
  # Listar backups
  docker compose exec backup restore.sh
  
  # Restaurar backup específico (ATENÇÃO: os dados atuais do banco serão sobrescritos!)
  docker compose exec backup restore.sh /backups/laudinho_backup_AAAA-MM-DD_HH-MM-SS.sql.gz
  ```

### 2. Scan de Vulnerabilidades (Segurança de Dependências e Imagens)
* **Como funciona:** O script local `scripts/security-scan.sh` realiza a auditoria das dependências do backend (`npm audit`) e frontend (`pnpm audit`), e analisa as imagens Docker em busca de CVEs conhecidas utilizando `docker scout`.
* **CI/CD Automatizado:** Criamos um workflow no GitHub Actions (`.github/workflows/security-scan.yml`) que executa a varredura a cada push nas branches principais(`main`, `develop`), pull requests e de forma recorrente todas as segundas-feiras às 08:00 UTC.
* **Executar Localmente:**
  ```bash
  ./scripts/security-scan.sh
  ```
  O relatório detalhado será salvo em `reports/security-report-YYYY-MM-DD.txt`.

### 3. Auditoria de Logs (Audit Trail)
* **Como funciona:** Implementamos um middleware de auditoria que intercepta todas as requisições de mutação de dados (`POST`, `PUT`, `DELETE`, `PATCH`). Estes registros de segurança são armazenados de forma estruturada (JSON) e isolados no arquivo dedicado `logs/audit.log` (mapeado no volume persistente `laudinho_logs`).
* **O que é auditado:**
  - **Mutação de dados:** Método, rota, ID do usuário autenticado (ou `anonymous` / `invalid-token`), IP de origem, código de resposta HTTP (ex. 201, 400), duração da requisição e User-Agent.
  - **Eventos de Autenticação:** Cadastro com sucesso, erros de duplicidade, login com sucesso, tentativas com e-mail inexistente e senha incorreta.
* **Acompanhar logs de auditoria em tempo real:**
  ```bash
  docker compose exec back tail -f /app/logs/audit.log
  ```

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

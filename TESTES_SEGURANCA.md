# Guia de Testes — Segurança e Confiabilidade (Laudinho 0.6.0)

Este documento reúne de forma simplificada todos os comandos e passos necessários para executar e validar as implementações de **Segurança** (Scan de Vulnerabilidades e Auditoria de Logs) e **Confiabilidade** (Backup e Restauração Automática).

---

## 1. Varredura de Vulnerabilidades (Security Scan)

O script unificado analisa as dependências locais de forma inteligente (detectando `npm` no backend e `pnpm` no frontend) e as imagens Docker em busca de brechas de segurança.

### Execução Completa (Automatizada)
Rode o comando a partir do diretório raiz:
```bash
./scripts/security-scan.sh
```
* **O que acontece:** O relatório completo consolidado será gerado e salvo em `reports/security-report-AAAA-MM-DD.txt`.

### Testes Individuais Isolados
Caso prefira testar os gerenciadores de pacotes de forma manual:

* **Backend (npm):**
  ```bash
  cd back && npm audit
  ```
* **Frontend (pnpm):**
  ```bash
  cd front && pnpm audit
  ```

---

## 2. Backup e Restauração (PostgreSQL)

O contêiner `laudinho-backup` está ativo na infraestrutura do Docker. As operações abaixo devem ser executadas com os contêineres ativos (`docker compose up -d`).

### A — Criar Backup Imediato
Força a criação de um backup compactado `.sql.gz` na hora:
```bash
docker compose exec backup backup.sh
```
* **Verificação:** O terminal exibirá o nome do arquivo gerado (ex: `laudinho_backup_2026-06-12_00-17-37.sql.gz`).

### B — Listar Backups Existentes
Para visualizar os arquivos disponíveis no volume seguro:
```bash
docker compose exec backup restore.sh
```
* Ele mostrará as opções disponíveis no diretório `/backups/`.

### C — Restaurar um Backup
Copie o caminho do arquivo desejado mostrado na lista e passe como argumento (ATENÇÃO: os dados atuais do banco de dados ativo serão limpos e sobrescritos com o dump):
```bash
docker compose exec backup restore.sh /backups/laudinho_backup_AAAA-MM-DD_HH-MM-SS.sql.gz
```
* **Verificação:** O terminal exibirá a sequência de drops/creates e finalizará com `Restauração concluída com sucesso.`.

---

## 3. Auditoria de Logs (Audit Trail)

Todas as operações que alteram o banco de dados (`POST`, `PUT`, `DELETE`, `PATCH`) e eventos de segurança/autenticação são registrados no arquivo isolado de auditoria `/app/logs/audit.log` do backend.

### A — Acompanhar a auditoria em Tempo Real
Deixe um terminal aberto rodando o comando a seguir:
```bash
docker compose exec back tail -f /app/logs/audit.log
```

### B — Gerar Eventos de Teste (Simular Ações)
Enquanto monitora o terminal acima, execute uma ação no sistema pelo navegador (como realizar login ou cadastrar um cliente) ou simule com `curl` via terminal:

```bash
# Simular tentativa de registro de usuário:
curl -i -X POST -H "Content-Type: application/json" -d '{"usuarioemail":"teste-auditoria@example.com","usuariosenha":"SenhaSegura123"}' http://localhost:8080/api/auth/register
```

### C — Ler o histórico de Auditoria completo
Para exibir todas as entradas JSON registradas na auditoria:
```bash
docker compose exec back cat /app/logs/audit.log
```
* **Verificação:** Cada ação gera registros detalhados contendo `ip`, `method`, `path`, `statusCode`, `durationMs` e `userId` do responsável.

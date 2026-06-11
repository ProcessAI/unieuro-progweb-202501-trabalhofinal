#!/bin/sh
# =============================================================================
# restore.sh — Restauração de backup do PostgreSQL (Laudinho)
# Uso: ./scripts/restore.sh <caminho-do-arquivo.sql.gz>
# =============================================================================

set -e

if [ -z "$1" ]; then
  echo "Uso: $0 <caminho-do-arquivo-backup.sql.gz>"
  echo ""
  echo "Backups disponíveis:"
  ls -lh /backups/laudinho_backup_*.sql.gz 2>/dev/null || echo "  (nenhum backup encontrado)"
  exit 1
fi

BACKUP_FILE="$1"

if [ ! -f "${BACKUP_FILE}" ]; then
  echo "ERRO: Arquivo não encontrado: ${BACKUP_FILE}"
  exit 1
fi

echo "[$(date -Iseconds)] Iniciando restauração a partir de: ${BACKUP_FILE}"
echo "[$(date -Iseconds)] ATENÇÃO: Os dados atuais do banco serão sobrescritos!"

# Descomprime e restaura
gunzip -c "${BACKUP_FILE}" | psql \
  -h "${PGHOST:-db}" \
  -p "${PGPORT:-5432}" \
  -U "${POSTGRES_USER:-postgres}" \
  -d "${POSTGRES_DB:-laudinho_db}" \
  --single-transaction \
  --set ON_ERROR_STOP=on

echo "[$(date -Iseconds)] Restauração concluída com sucesso."

#!/bin/sh
# =============================================================================
# backup.sh — Backup automático do PostgreSQL (Laudinho)
# Executa pg_dump comprimido com gzip e rotaciona backups antigos.
# =============================================================================

set -e

BACKUP_DIR="/backups"
RETENTION_DAYS="${BACKUP_RETENTION_DAYS:-7}"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
FILENAME="laudinho_backup_${TIMESTAMP}.sql.gz"

echo "[$(date -Iseconds)] Iniciando backup do banco '${POSTGRES_DB}'..."

# Executa o dump comprimido
pg_dump \
  -h "${PGHOST:-db}" \
  -p "${PGPORT:-5432}" \
  -U "${POSTGRES_USER:-postgres}" \
  -d "${POSTGRES_DB:-laudinho_db}" \
  --no-owner \
  --no-privileges \
  | gzip > "${BACKUP_DIR}/${FILENAME}"

FILESIZE=$(du -h "${BACKUP_DIR}/${FILENAME}" | cut -f1)
echo "[$(date -Iseconds)] Backup concluído: ${FILENAME} (${FILESIZE})"

# Rotação: remove backups com mais de N dias
REMOVED=$(find "${BACKUP_DIR}" -name "laudinho_backup_*.sql.gz" -mtime +${RETENTION_DAYS} -print -delete | wc -l)
if [ "$REMOVED" -gt 0 ]; then
  echo "[$(date -Iseconds)] Rotação: ${REMOVED} backup(s) antigo(s) removido(s) (> ${RETENTION_DAYS} dias)"
fi

echo "[$(date -Iseconds)] Backup finalizado com sucesso."

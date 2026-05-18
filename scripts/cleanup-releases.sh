#!/bin/bash
# scripts/cleanup-releases.sh
# Limpa releases antigas (manter últimas N)
# Uso: ./cleanup-releases.sh <app_dir> <keep_count>

APP_DIR=${1:-"/dados/laudinho"}
KEEP_COUNT=${2:-10}

echo "🧹 Limpando releases antigas em $APP_DIR (mantendo últimas $KEEP_COUNT)"

cd "$APP_DIR/releases" || exit 1
ls -t | grep release_ | tail -n +$((KEEP_COUNT+1)) | xargs -r rm -rf

echo "✅ Limpeza concluída! Releases restantes:"
ls -t | grep release_ | head -$KEEP_COUNT
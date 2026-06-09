#!/bin/bash
# scripts/status.sh
# Mostra status atual dos deploys
# Uso: ./status.sh <ambiente> (prod|staging)

AMBIENTE=${1:-"staging"}

if [ "$AMBIENTE" = "prod" ]; then
  APP_DIR="/dados/laudinho"
  PM2_NAME="laudinho-backend"
else
  APP_DIR="/dados/laudinho-staging"
  PM2_NAME="laudinho-backend-staging"
fi

echo "📊 Status do ambiente: $AMBIENTE"
echo "================================="

# Release atual
if [ -L "$APP_DIR/current" ]; then
  CURRENT_RELEASE=$(readlink -f "$APP_DIR/current" | xargs basename)
  echo "📍 Release atual: $CURRENT_RELEASE"
else
  echo "⚠️ Nenhuma release ativa"
fi

# Releases disponíveis
echo ""
echo "📁 Últimas releases:"
ls -lt "$APP_DIR/releases" 2>/dev/null | grep release_ | head -5

# Status PM2
echo ""
echo "🟢 Status da aplicação:"
pm2 show "$PM2_NAME" 2>/dev/null || echo "Aplicação não está rodando"

# Últimos deploys
echo ""
echo "📜 Histórico de deploys (últimas 5 linhas):"
tail -5 "$APP_DIR/deploy_history.log" 2>/dev/null || echo "Nenhum histórico encontrado"
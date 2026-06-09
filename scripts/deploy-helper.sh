#!/bin/bash
# scripts/deploy-helper.sh
# Funções auxiliares para deploy

# Verifica saúde da aplicação
check_health() {
  local PORT=$1
  local MAX_RETRIES=$2
  local RETRY=0
  
  echo "🧪 Aguardando health check na porta $PORT..."
  
  while [ $RETRY -lt $MAX_RETRIES ]; do
    if curl -f -s "http://localhost:$PORT/health" > /dev/null; then
      echo "✅ Health check passou!"
      return 0
    fi
    echo "Aguardando... (tentativa $((RETRY+1))/$MAX_RETRIES)"
    sleep 5
    RETRY=$((RETRY+1))
  done
  
  echo "❌ Health check falhou após $MAX_RETRIES tentativas"
  return 1
}

# Lista releases disponíveis
list_releases() {
  local APP_DIR=$1
  ls -lt "$APP_DIR/releases" | grep release_ | head -10
}

# Exporta funções
export -f check_health list_releases
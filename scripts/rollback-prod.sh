#!/bin/bash
# Rollback manual em produção
# Uso: ./rollback-prod.sh release_20260518_120000

if [ -z "$1" ]; then
  echo "❌ Informe a release para rollback"
  echo "Releases disponíveis:"
  ./scripts/list-releases-prod.sh
  exit 1
fi

echo "⚠️ ATENÇÃO: Rollback em PRODUÇÃO!"
echo "Release alvo: $1"
read -p "Confirma rollback? (digite 'PRODUCTION' para confirmar): " CONFIRM

if [ "$CONFIRM" != "PRODUCTION" ]; then
  echo "Rollback cancelado"
  exit 1
fi

ssh $SSH_USER@$SSH_HOST << EOF
  export NVM_DIR="\$HOME/.nvm"
  [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
  
  APP_DIR="/dados/laudinho"
  TARGET_RELEASE="$1"
  
  if [ ! -d "\$APP_DIR/releases/\$TARGET_RELEASE" ]; then
    echo "❌ Release não encontrada"
    exit 1
  fi
  
  echo "⏪ ROLLBACK EM PRODUÇÃO para \$TARGET_RELEASE"
  
  # Backup da release atual
  if [ -L "\$APP_DIR/current" ]; then
    CURRENT_RELEASE=\$(basename \$(readlink -f "\$APP_DIR/current"))
    tar -czf "\$APP_DIR/backups/pre_rollback_\${CURRENT_RELEASE}.tar.gz" -C "\$APP_DIR/releases" "\$CURRENT_RELEASE"
  fi
  
  # Trocar symlink
  ln -sfn "\$APP_DIR/releases/\$TARGET_RELEASE" "\$APP_DIR/current"
  
  # Reiniciar
  pm2 delete laudinho-backend || true
  cd "\$APP_DIR/current/backend"
  pm2 start dist/index.js --name "laudinho-backend"
  pm2 save
  
  echo "✅ Rollback concluído!"
EOF
#!/bin/bash
# scripts/rollback-staging.sh
# Uso: ./rollback-staging.sh release_20260518_120000

if [ -z "$1" ]; then
  echo "❌ Informe a release para rollback"
  echo "Releases disponíveis:"
  ssh $SSH_USER@$SSH_HOST "ls -t /dados/laudinho-staging/releases | grep release_"
  exit 1
fi

ssh $SSH_USER@$SSH_HOST << EOF
  export NVM_DIR="\$HOME/.nvm"
  [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
  
  APP_DIR="/dados/laudinho-staging"
  TARGET_RELEASE="$1"
  
  if [ ! -d "\$APP_DIR/releases/\$TARGET_RELEASE" ]; then
    echo "❌ Release não encontrada"
    exit 1
  fi
  
  echo "⏪ Rollback para \$TARGET_RELEASE"
  
  # Trocar symlink
  ln -sfn "\$APP_DIR/releases/\$TARGET_RELEASE" "\$APP_DIR/current"
  
  # Reiniciar PM2
  pm2 delete laudinho-backend-staging || true
  cd "\$APP_DIR/current/backend"
  pm2 start dist/index.js --name "laudinho-backend-staging"
  pm2 save
  
  echo "✅ Rollback concluído"
EOF
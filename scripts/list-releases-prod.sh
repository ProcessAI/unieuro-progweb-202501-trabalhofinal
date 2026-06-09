#!/bin/bash
# Lista todas as releases disponíveis em produção

ssh $SSH_USER@$SSH_HOST "ls -lt /dados/laudinho/releases | grep release_ | head -20"
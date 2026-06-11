#!/bin/sh
# =============================================================================
# security-scan.sh — Varredura de vulnerabilidades (Laudinho)
# Analisa dependências npm/pnpm (back e front) e imagens Docker.
# =============================================================================

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REPORT_DIR="${PROJECT_ROOT}/reports"
TIMESTAMP=$(date +"%Y-%m-%d")
REPORT_FILE="${REPORT_DIR}/security-report-${TIMESTAMP}.txt"
HAS_CRITICAL=0

mkdir -p "${REPORT_DIR}"

echo "=============================================" | tee "${REPORT_FILE}"
echo " Relatório de Segurança — Laudinho"           | tee -a "${REPORT_FILE}"
echo " Data: ${TIMESTAMP}"                           | tee -a "${REPORT_FILE}"
echo "=============================================" | tee -a "${REPORT_FILE}"

# Função auxiliar para contar vulnerabilidades críticas no JSON
count_critical() {
  python3 -c 'import sys, re; text=sys.stdin.read(); print(len(re.findall(r"\"severity\"\s*:\s*\"critical\"", text)))'
}

# -----------------------------------------------
# 1. Auditoria de Dependências — Backend (npm)
# -----------------------------------------------
echo "" | tee -a "${REPORT_FILE}"
echo ">>> [1/4] Auditoria de Dependências — Backend" | tee -a "${REPORT_FILE}"
echo "---------------------------------------------" | tee -a "${REPORT_FILE}"

if [ -d "${PROJECT_ROOT}/back" ]; then
  cd "${PROJECT_ROOT}/back"
  
  if [ -f "pnpm-lock.yaml" ]; then
    echo "Detectado pnpm no backend. Executando pnpm audit..." | tee -a "${REPORT_FILE}"
    pnpm audit --audit-level=moderate 2>&1 | tee -a "${REPORT_FILE}" || true
    CRIT_BACK=$(pnpm audit --json 2>/dev/null | count_critical)
  else
    echo "Detectado npm no backend. Executando npm audit..." | tee -a "${REPORT_FILE}"
    npm audit --audit-level=moderate 2>&1 | tee -a "${REPORT_FILE}" || true
    CRIT_BACK=$(npm audit --json 2>/dev/null | count_critical)
  fi
  
  if [ -n "$CRIT_BACK" ] && [ "$CRIT_BACK" -gt 0 ]; then
    HAS_CRITICAL=1
    echo "⚠️  ${CRIT_BACK} vulnerabilidade(s) CRÍTICA(S) encontrada(s) no backend!" | tee -a "${REPORT_FILE}"
  fi
else
  echo "  Diretório back/ não encontrado. Pulando." | tee -a "${REPORT_FILE}"
fi

# -----------------------------------------------
# 2. Auditoria de Dependências — Frontend (pnpm)
# -----------------------------------------------
echo "" | tee -a "${REPORT_FILE}"
echo ">>> [2/4] Auditoria de Dependências — Frontend" | tee -a "${REPORT_FILE}"
echo "---------------------------------------------" | tee -a "${REPORT_FILE}"

if [ -d "${PROJECT_ROOT}/front" ]; then
  cd "${PROJECT_ROOT}/front"
  
  if [ -f "pnpm-lock.yaml" ]; then
    echo "Detectado pnpm no frontend. Executando pnpm audit..." | tee -a "${REPORT_FILE}"
    pnpm audit --audit-level=moderate 2>&1 | tee -a "${REPORT_FILE}" || true
    CRIT_FRONT=$(pnpm audit --json 2>/dev/null | count_critical)
  else
    echo "Detectado npm no frontend. Executando npm audit..." | tee -a "${REPORT_FILE}"
    npm audit --audit-level=moderate 2>&1 | tee -a "${REPORT_FILE}" || true
    CRIT_FRONT=$(npm audit --json 2>/dev/null | count_critical)
  fi
  
  if [ -n "$CRIT_FRONT" ] && [ "$CRIT_FRONT" -gt 0 ]; then
    HAS_CRITICAL=1
    echo "⚠️  ${CRIT_FRONT} vulnerabilidade(s) CRÍTICA(S) encontrada(s) no frontend!" | tee -a "${REPORT_FILE}"
  fi
else
  echo "  Diretório front/ não encontrado. Pulando." | tee -a "${REPORT_FILE}"
fi

# -----------------------------------------------
# 3. Docker Scout — Imagem do Backend
# -----------------------------------------------
echo "" | tee -a "${REPORT_FILE}"
echo ">>> [3/4] Docker Scout — Imagem do Backend" | tee -a "${REPORT_FILE}"
echo "---------------------------------------------" | tee -a "${REPORT_FILE}"

if command -v docker >/dev/null 2>&1 && docker scout version >/dev/null 2>&1; then
  # Extrai imagem usando formato robusto
  BACK_IMAGE=$(docker compose -f "${PROJECT_ROOT}/docker-compose.yml" images back | tail -n +2 | awk '{print $2":"$3}' | head -1)
  if [ -z "${BACK_IMAGE}" ] || [ "${BACK_IMAGE}" = ":" ]; then
    # Fallback para o nome esperado da imagem buildada
    BACK_IMAGE="unieuro-progweb-202501-trabalhofinal-laudinho-060-back:latest"
  fi
  
  echo "Analisando imagem: ${BACK_IMAGE}..." | tee -a "${REPORT_FILE}"
  docker scout cves "${BACK_IMAGE}" 2>&1 | tee -a "${REPORT_FILE}" || true
else
  echo "  Docker Scout não disponível. Instale o Docker Desktop ou utilize um scanner compatível." | tee -a "${REPORT_FILE}"
fi

# -----------------------------------------------
# 4. Docker Scout — Imagem do Frontend
# -----------------------------------------------
echo "" | tee -a "${REPORT_FILE}"
echo ">>> [4/4] Docker Scout — Imagem do Frontend" | tee -a "${REPORT_FILE}"
echo "---------------------------------------------" | tee -a "${REPORT_FILE}"

if command -v docker >/dev/null 2>&1 && docker scout version >/dev/null 2>&1; then
  # Extrai imagem usando formato robusto
  FRONT_IMAGE=$(docker compose -f "${PROJECT_ROOT}/docker-compose.yml" images front | tail -n +2 | awk '{print $2":"$3}' | head -1)
  if [ -z "${FRONT_IMAGE}" ] || [ "${FRONT_IMAGE}" = ":" ]; then
    # Fallback para o nome esperado da imagem buildada
    FRONT_IMAGE="unieuro-progweb-202501-trabalhofinal-laudinho-060-front:latest"
  fi
  
  echo "Analisando imagem: ${FRONT_IMAGE}..." | tee -a "${REPORT_FILE}"
  docker scout cves "${FRONT_IMAGE}" 2>&1 | tee -a "${REPORT_FILE}" || true
else
  echo "  (já reportado acima)" | tee -a "${REPORT_FILE}"
fi

# -----------------------------------------------
# Resumo
# -----------------------------------------------
echo "" | tee -a "${REPORT_FILE}"
echo "=============================================" | tee -a "${REPORT_FILE}"
echo " Relatório salvo em: ${REPORT_FILE}" | tee -a "${REPORT_FILE}"
echo "=============================================" | tee -a "${REPORT_FILE}"

if [ "${HAS_CRITICAL}" -eq 1 ]; then
  echo ""
  echo "❌ ATENÇÃO: Vulnerabilidades CRÍTICAS detectadas! Revise o relatório acima."
  exit 1
else
  echo ""
  echo "✅ Nenhuma vulnerabilidade crítica detectada."
  exit 0
fi

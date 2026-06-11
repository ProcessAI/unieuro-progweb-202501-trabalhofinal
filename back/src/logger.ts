import pino from "pino";
import path from "path";
import fs from "fs";

// Garante que o diretório de logs existe
const LOG_DIR = process.env.LOG_DIR || path.join(process.cwd(), "logs");
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const LOG_FILE = path.join(LOG_DIR, "app.log");
const AUDIT_LOG_FILE = path.join(LOG_DIR, "audit.log");

/**
 * Logger principal com transporte duplo:
 * - Console: formatado com pino-pretty (legível para desenvolvimento)
 * - Arquivo: JSON estruturado em /app/logs/app.log (para análise e auditoria)
 */
const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport: {
    targets: [
      // Console — formato legível para desenvolvimento
      {
        target: "pino-pretty",
        level: "info",
        options: {
          colorize: true,
          translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
          ignore: "pid,hostname",
        },
      },
      // Arquivo — JSON estruturado para auditoria e análise
      {
        target: "pino/file",
        level: "info",
        options: {
          destination: LOG_FILE,
          mkdir: true,
        },
      },
    ],
  },
});

/**
 * Logger dedicado para auditoria — grava em arquivo separado
 * para facilitar a análise de eventos de segurança.
 */
export const auditLogger = pino({
  level: "info",
  transport: {
    targets: [
      {
        target: "pino/file",
        level: "info",
        options: {
          destination: AUDIT_LOG_FILE,
          mkdir: true,
        },
      },
      {
        target: "pino-pretty",
        level: "warn",
        options: {
          colorize: true,
          translateTime: "SYS:yyyy-mm-dd HH:MM:ss",
          messageFormat: "🔒 {msg}",
          ignore: "pid,hostname",
        },
      },
    ],
  },
});

export default logger;
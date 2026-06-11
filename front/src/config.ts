// Configuração central de URLs do front.
// Para rodar local, defina VITE_API_URL no front/.env antes do build:
//   echo "VITE_API_URL=http://localhost:8080" > front/.env
// Em produção (build sem .env), usa o domínio público como fallback.
const PROD_API_URL = 'http://localhost:8080';

export const API_BASE_URL: string =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/+$/, '') ||
  PROD_API_URL;

export const API_PREFIX = '/api';

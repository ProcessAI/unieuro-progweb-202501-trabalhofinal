FROM node:22-bookworm-slim AS build
WORKDIR /app

# Vite lê arquivos .env* no build. Copie .env (ou .env.production) antes do install.
# Se .env não existir, o config.ts usa o fallback de produção.
COPY package*.json ./
# Note: front/ does not commit a package-lock.json, so `npm ci` cannot be used.
# `npm install` is the project's chosen reproducibility trade-off.
RUN npm install --no-audit --no-fund

COPY .env* ./
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="/home/ubuntu/igreja-batista-jmv"
COMPOSE_FILE="$PROJECT_DIR/infra/docker-compose.yml"
ENV_FILE="$PROJECT_DIR/.env"
NGINX_CONF="$PROJECT_DIR/infra/web/default.https.conf"

say()  { echo -e "\033[1;34m==>\033[0m $*"; }
ok()   { echo -e "\033[1;32m✔\033[0m $*"; }
err()  { echo -e "\033[1;31m✖\033[0m $*" >&2; }

cd "$PROJECT_DIR"

# 1) .env presente?
if [[ ! -f "$ENV_FILE" ]]; then
  err "Arquivo .env não encontrado em $ENV_FILE"
  exit 1
fi

# 2) Atualiza código
say "Atualizando repositório (git pull origin main)…"
git pull origin main
ok  "Código atualizado."

# 3) Valida sintaxe do Nginx ANTES de subir
say "Validando sintaxe do Nginx (nginx -t)…"
# usamos a imagem oficial do nginx só para testar o include de conf.d
# montamos o seu default.https.conf em conf.d e os certificados (somente leitura)
docker run --rm \
  -v "$NGINX_CONF":/etc/nginx/conf.d/default.conf:ro \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  nginx:1.29-alpine nginx -t >/dev/null
ok  "Sintaxe OK."

# 4) Builda imagens com env
say "Buildando imagens…"
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" build
ok  "Build concluído."

# 5) Sobe containers
say "Subindo containers…"
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d
ok  "Containers iniciados."

# 6) Aguarda web ficar healthy (máx ~90s)
say "Aguardando o 'web' ficar healthy…"
deadline=$((SECONDS+90))
status="starting"
while [[ $SECONDS -lt $deadline ]]; do
  status=$(docker inspect --format '{{.State.Health.Status}}' infra-web-1 2>/dev/null || echo "unknown")
  [[ "$status" == "healthy" ]] && break
  sleep 5
done

if [[ "$status" != "healthy" ]]; then
  err "O container 'web' não ficou healthy (status: $status)."
  say "Últimos logs do web:"
  docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" logs --tail=50 web || true
  exit 1
fi
ok "Web está healthy."

# 7) Smoke tests rápidos
say "Smoke test HTTPS / e /api/health…"
set +e
curl -fsS -o /dev/null https://www.igrejabatistajmv.com.br/
curl -fsS https://www.igrejabatistajmv.com.br/api/health | grep -q '"ok":true'
rc=$?
set -e
if [[ $rc -ne 0 ]]; then
  err "Smoke test falhou."
  exit 1
fi
ok "Smoke test OK."

# 8) Status e últimos logs
say "Containers ativos:"
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" ps

say "Últimos logs do web:"
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" logs --tail=20 web || true

ok "Deploy concluído! 🚀"

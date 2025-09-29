#!/bin/bash
set -e  # se der erro em qualquer etapa, o script para

PROJECT_DIR="/home/ubuntu/igreja-batista-jmv"
COMPOSE_FILE="$PROJECT_DIR/infra/docker-compose.yml"
ENV_FILE="$PROJECT_DIR/.env"

echo "==> Iniciando deploy da Igreja Batista JMV 🚀"

# 1. Verifica se .env existe
if [ ! -f "$ENV_FILE" ]; then
  echo "❌ Arquivo .env não encontrado em $ENV_FILE"
  exit 1
fi

# 2. Carrega variáveis de ambiente
export $(grep -v '^#' "$ENV_FILE" | xargs)

# 3. Atualiza repositório
echo "==> Atualizando código..."
cd "$PROJECT_DIR"
git pull origin main

# 4. Build das imagens
echo "==> Buildando containers..."
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" build --no-cache

# 5. Sobe os containers
echo "==> Subindo containers..."
docker compose --env-file "$ENV_FILE" -f "$COMPOSE_FILE" up -d

# 6. Status final
echo "==> Containers ativos:"
docker compose -f "$COMPOSE_FILE" ps

# 7. Mostra últimos logs do web
echo "==> Últimos logs do web:"
docker compose -f "$COMPOSE_FILE" logs --tail=20 web


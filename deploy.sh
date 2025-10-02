#!/bin/bash
set -euo pipefail

# Caminhos
PROJECT_DIR="/home/ubuntu/igreja-batista-jmv"
COMPOSE_FILE="$PROJECT_DIR/infra/docker-compose.yml"
ENV_FILE="$PROJECT_DIR/.env"

# Helper para rodar compose sempre com o .env
COMPOSE="docker compose --env-file \"$ENV_FILE\" -f \"$COMPOSE_FILE\""

echo "==> Iniciando deploy da Igreja Batista JMV 🚀"

# 1) Conferências básicas
if [[ ! -f "$ENV_FILE" ]]; then
  echo "❌ Arquivo .env não encontrado em $ENV_FILE"; exit 1
fi
if [[ ! -f "$COMPOSE_FILE" ]]; then
  echo "❌ docker-compose não encontrado em $COMPOSE_FILE"; exit 1
fi

# 2) Validar variáveis obrigatórias do .env (evita subir sem credenciais/host)
req_vars=(SERVER_NAME AWS_REGION AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY SNS_TOPIC_ARN)
for v in "${req_vars[@]}"; do
  if ! grep -qE "^$v=" "$ENV_FILE"; then
    echo "❌ Variável obrigatória ausente no .env: $v"; exit 1
  fi
  if [[ -z "$(grep -E "^$v=" "$ENV_FILE" | cut -d= -f2-)" ]]; then
    echo "❌ Variável $v está vazia no .env"; exit 1
  fi
done

# 3) Atualizar repositório
echo "==> Atualizando código..."
cd "$PROJECT_DIR"
# puxa com rebase, sem mexer no seu .env local
git fetch origin main
git rebase origin/main || { echo "⚠️  Rebase falhou, tentando merge rápido"; git merge --ff-only origin/main; }

# 4) Build
echo "==> Buildando containers..."
eval $COMPOSE build --pull

# 5) Subir apenas os serviços do projeto
echo "==> Subindo containers..."
eval $COMPOSE up -d web api

# 6) Status final (agora também com --env-file)
echo "==> Containers ativos:"
eval $COMPOSE ps

# 7) Logs rápidos do web/api (com --env-file)
echo "==> Últimos logs do web:"
eval $COMPOSE logs --tail=30 web || true
echo "==> Últimos logs do api:"
eval $COMPOSE logs --tail=30 api || true

echo "✅ Deploy concluído!"


FROM node:18-alpine AS build
WORKDIR /app
# copie os manifests primeiro para aproveitar cache
COPY package.json ./
# se você tiver package-lock.json no futuro, adicione a linha abaixo:
# COPY package-lock.json ./
RUN npm install
# agora copie o resto do projeto
COPY . .
# build do front
RUN npm run build


FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN mkdir -p /var/www/certbot
# NÃO copiar nginx.conf principal aqui!
# Usaremos conf.d via bind-mount pelo compose
COPY --from=build /app/dist /usr/share/nginx/html
HEALTHCHECK CMD wget -q -O - http://localhost/ || exit 1


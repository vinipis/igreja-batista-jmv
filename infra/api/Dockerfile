FROM node:18-alpine
WORKDIR /srv/api
# copiamos só o server para manter simples
COPY server.js .
# instalar deps (Express, AWS SDK v2, CORS, Helmet, Joi)
RUN npm init -y && npm i express aws-sdk@2 cors helmet joi
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]

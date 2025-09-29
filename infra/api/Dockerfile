FROM node:18-alpine
WORKDIR /srv/api
COPY infra/api/server.js .
RUN npm init -y && npm i express aws-sdk@2 cors helmet joi
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]


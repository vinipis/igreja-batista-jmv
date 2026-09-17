FROM node:18-alpine
WORKDIR /srv/api
COPY infra/api/package.json .
RUN npm install --omit=dev
COPY infra/api/server.js .
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]


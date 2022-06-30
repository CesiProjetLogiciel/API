# syntax=docker/dockerfile:1

FROM node:16.15-alpine
ENV NODE_ENV=production

WORKDIR ./

COPY package*.json .

RUN npm install --omit=dev

COPY . .

RUN ./node_modules/.bin/tsc

EXPOSE 3000/tcp

CMD [ "node", "src/index.js" ]
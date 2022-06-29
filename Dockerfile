# syntax=docker/dockerfile:1

FROM node:16.15-slim
ENV NODE_ENV=production

WORKDIR ./

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000/tcp

CMD [ "npm", "start" ]
FROM node:16

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm install

COPY app/ .

ENV PORT=3000

EXPOSE $PORT

CMD [ "npm", "start" ]
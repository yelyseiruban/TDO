FROM node:alpine

RUN apk --no-cache add curl

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

HEALTHCHECK  CMD curl -fs http://localhost:3000/health || exit 1
FROM node:18

WORKDIR /home/node/app

COPY package*.json ./

ARG API_URL

ENV API_URL ${API_URL}

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
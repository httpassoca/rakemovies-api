FROM node:alpine

ARG API_PORT=3000

WORKDIR /usr/rakemovie-api

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .
RUN yarn build

EXPOSE $API_PORT

CMD ["yarn", "start:prod"]
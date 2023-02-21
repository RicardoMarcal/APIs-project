FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache builds-deps build-base make gcc g++ python3 && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apk del builds-deps build-base make gcc g++ python3

ENTRYPOINT [ "npm", "run", "start:dev" ]

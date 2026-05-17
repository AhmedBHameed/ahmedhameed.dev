FROM node:22.22 AS production
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22.22 AS development
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
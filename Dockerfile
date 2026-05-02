FROM node:22.22-alpine AS production
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22.22-alpine AS development
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
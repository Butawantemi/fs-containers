# Stage 1: Build the application
FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:8080/api
RUN npm run build


FROM build-stage AS test
RUN npm test

FROM nginx:1.29-alpine
COPY --from=test /usr/src/app/dist /usr/share/nginx/html

FROM node:20 AS base
USER node
ENV VITE_BACKEND_URL=http://localhost:3000/
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

FROM base AS test-stage
ENV NODE_ENV=test
COPY --chown=node:node ./package.json ./package-lock.json ./
RUN npm ci --include=dev
COPY --chown=node:node . .
RUN npm run test

FROM test-stage AS build-stage
RUN npm ci --omit=dev
RUN npm run build

FROM nginx:1.25-alpine AS production-stage
ENV NODE_ENV=production
COPY --from=build-stage home/node/app/dist /usr/share/nginx/html


FROM node:20.9.0-bullseye-slim AS base
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

FROM base AS build-stage
COPY --chown=node:node ./package.json ./package-lock.json ./
RUN npm ci --omit=dev
COPY --chown=node:node . .
RUN npm run build

FROM nginx:1.25-alpine AS production-stage
ENV NODE_ENV=production
COPY --from=build-stage home/node/app/dist /usr/share/nginx/html
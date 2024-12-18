FROM node:20.9.0-bullseye-slim AS base
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

FROM base AS test-stage
ENV NODE_ENV=test
COPY --chown=node:node ./package.json ./package-lock.json ./
RUN npm ci --include=dev
COPY --chown=node:node . .
RUN npm run test

FROM test-stage AS production-stage
ENV NODE_ENV=production
ENV DEBUG=bloglist-backend:*
RUN npm ci --omit=dev
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["npm", "start"]
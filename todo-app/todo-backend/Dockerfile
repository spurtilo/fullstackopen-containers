FROM node:20.9.0-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

ENV NODE_ENV=production

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . /home/node/app

RUN npm ci --omit=dev

ENV DEBUG=todo-backend:*

USER node

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

CMD ["npm", "start"]
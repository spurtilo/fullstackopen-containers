FROM node:20.9.0-bullseye-slim
USER node
ENV NODE_ENV=development
ENV DEBUG=bloglist-backend-dev:*
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN npm install
CMD ["npm", "run", "dev", "--", "--host"]
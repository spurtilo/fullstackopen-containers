FROM node:20
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN npm install
CMD ["npm", "run", "dev", "--", "--host"]
FROM node:23-slim
WORKDIR /opt/node-mongo-todo
COPY app/ .
RUN npm install
CMD [ "node", "app.js" ]
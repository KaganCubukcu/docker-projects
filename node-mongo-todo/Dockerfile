FROM node:23-slim
WORKDIR /opt/node-mongo-todo
COPY . .
ENV PORT=4000
EXPOSE 4000
RUN npm install
CMD [ "node", "server.js" ]
FROM node:23-slim
WORKDIR /vue-app
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "run", "dev" ]
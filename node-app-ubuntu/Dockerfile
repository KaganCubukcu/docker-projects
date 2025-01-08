FROM ubuntu:latest
RUN apt-get update
RUN apt-get install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs
WORKDIR /opt/node-app
COPY . /opt/node-app/
ENV name=kagancubukcu
# COPY . . 
# CMD ["node", "/opt/node-app/index.js"]
CMD ["node", "index.js"]
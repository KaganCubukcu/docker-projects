# Docker Learning Repository

This repository is a learning resource for exploring and testing different Docker applications. It contains several Docker projects, each representing a specific technology or use case. The goal of this project is to help users gain experience with Docker.

## Proje Structure

Below is an explanation of the folders and their contents in this repository:

- **node-app**: A simple Node.js application.
- **node-app-ubuntu**: A Node.js application running on Ubuntu.
- **node-mongo-todo**: A Node.js to-do application using MongoDB.
- **node-server**: A Node.js server application.
- **python-app**: A Python application using Flask.
- **vue-app**: A Vue.js application
- **docker-compose**: A configuration file used to run multiple Docker containers together.

## Docker Compose Structure

In addition, this repository contains a `docker-compose` file. This file combines Docker containers used to allow different applications to interact with each other. The structure of the `docker-compose` file is organized as follows:

- **node-server**: A Node.js-based server.
- **todo-app**: A to-do application, containing Node.js and MongoDB.
- **file-uploader**: A Node.js application designed to handle image uploads.
- **wordpress**: WordPress starter configs.

For those who want to work these files, separate `README.md` files will be added for each file. The `docker-compose` file will be expanded, and Kubernetes integration is planned for future updates.

## References

- [Docker Nedir Nasıl Kullanılır? | Part #1 | Image Nedir? Container Nedir? Docker Komutları](https://www.youtube.com/watch?v=4XVfmGE1F_w)
- [Docker Network Türleri | Dockerfile ile Image Nasıl Üretilir | Part #2](https://www.youtube.com/watch?v=ZeYIp1PrWXc)
- [Docker Compose ile Servis Yönetimi Part #3 | Twitter, Asana, Wordpress, MongoDB NodeJS Uygulamaları](https://www.youtube.com/watch?v=cu3_ldKZ0os)
- [Linux'a Docker Kurulumu | Production | Nginx | Reverse Proxy ile 2 Domain 1 Host Yönetimi | Part #4](https://www.youtube.com/watch?v=JU5vvLNipXY)
- [Docker Hub](https://hub.docker.com/)

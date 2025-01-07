FROM node:lts-jod
RUN apt update && apt install -y vim less wget curl
COPY ./11-passing-functions-as-values/ /react
WORKDIR /react
RUN npm install && npm run build


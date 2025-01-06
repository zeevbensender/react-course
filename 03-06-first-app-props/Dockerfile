FROM node:lts-jod
RUN apt update && apt install -y vim less wget curl
COPY ./06-alternative-props-syntax/ /react
WORKDIR /react
RUN npm install && npm run build


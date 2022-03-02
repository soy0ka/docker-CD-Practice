FROM ubuntu:20.04
FROM node:16
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2323
CMD [ "npm", "start" ]
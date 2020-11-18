
FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY ./package.json .

RUN npm install

ADD . /app

EXPOSE 8080
CMD [ "npm", "start" ]

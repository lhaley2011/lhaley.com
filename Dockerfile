FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
RUN npm install
ADD . /usr/src/app

EXPOSE 8080

CMD ["npm","start"]


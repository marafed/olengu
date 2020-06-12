FROM node:current-buster
RUN npm install express -g
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 80
CMD npm install;npm start
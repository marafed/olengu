FROM node:current-buster
RUN npm install express express-generator -g
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 80
CMD node /app/app.js